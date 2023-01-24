import { Promises, retryIfError } from '@helix-js/utils';
import type { EntityInterface } from '../concepts';
import { ReadModelAction } from '../concepts';
import type { EntityEnvelope } from '../envelopes';
import { ReadModelEnvelope } from '../envelopes';
import { OptimisticConcurrencyError } from '../errors';
import { getMetadataStorage } from '../metadata';
import type { ProjectionMetadata } from '../metadata/definitions';
import { getProvider } from '../Provider';

export class ReadModelStore {
  private readonly provider = getProvider();

  public async fetchSnapshot(readModelName: string, readModelId: string) {
    return this.provider.readModels.find(readModelName, readModelId);
  }

  public async projectAndStoreSnapshot(entityEnvelope: EntityEnvelope) {
    const entity = entityEnvelope.payload;
    const projections = getMetadataStorage().projections[entityEnvelope.typeName];

    if (!projections) {
      this.provider.logger.debug(
        `[ReadModelStore#calculateAndUpdate] No projections registered for entity ${entityEnvelope.typeName}. Skipping...`
      );

      return;
    }

    this.provider.logger.debug(
      `[ReadModelStore#calculateAndUpdate] Found projections for entity ${entityEnvelope.typeName}:`,
      projections.map(metadata => `"${metadata.class.name}.${metadata.methodName}"`).join(', ')
    );

    await Promises.allSettledAndFulfilled(
      projections.flatMap(metadata => {
        const readModelName = metadata.class.name;
        const readModelIds = this.joinKeyForProjection(entity, metadata);

        if (!readModelIds) {
          this.provider.logger.warn(
            `[ReadModelStore#calculateAndUpdate] Couldn't find the joinKey named ${metadata.joinKey} in entity snapshot of ${entityEnvelope.typeName}. Skipping...`
          );

          return;
        }

        return readModelIds.map(async readModelId => {
          this.provider.logger.debug(
            '[ReadModelStore#calculateAndUpdate] Projecting entity snapshot',
            entity,
            `to build new state of read model ${readModelName} with id ${readModelId}`
          );

          return retryIfError(
            () => this.applyProjection(entity, metadata, readModelName, readModelId),
            OptimisticConcurrencyError
          );
        });
      })
    );
  }

  private joinKeyForProjection(entity: EntityInterface, metadata: ProjectionMetadata<EntityInterface>) {
    const joinKey = entity[metadata.joinKey];

    if (!joinKey) {
      return undefined;
    }

    return Array.isArray(joinKey) ? joinKey : [joinKey];
  }

  private async applyProjection(
    entity: EntityInterface,
    metadata: ProjectionMetadata<EntityInterface>,
    readModelName: string,
    readModelId: string
  ) {
    const readModelEnvelope = await this.provider.readModels.find(readModelName, readModelId);

    this.provider.logger.debug(
      `[ReadModelStore#applyProjection] Found read model ${readModelName} with ID ${readModelId}:`,
      readModelEnvelope
    );

    const currentVersion = readModelEnvelope?.version ?? 0;
    const nextReadModel = this.projectEntity(entity, metadata, readModelEnvelope, readModelId);

    if (nextReadModel === ReadModelAction.Delete) {
      this.provider.logger.debug(
        `[ReadModelStore#applyProjection] Deleting read model ${readModelName} with ID ${readModelId}`
      );

      await this.provider.readModels.delete(readModelName, readModelId);

      return;
    }

    if (nextReadModel === ReadModelAction.None) {
      this.provider.logger.debug(
        `[ReadModelStore#applyProjection] Skipping actions for ${readModelName} with ID ${readModelId}`
      );

      return;
    }

    const nextReadModelEnvelope = new ReadModelEnvelope(nextReadModel, {
      version: (readModelEnvelope?.version ?? 0) + 1,
    });

    return this.provider.readModels.store(nextReadModelEnvelope, currentVersion);
  }

  private projectEntity(
    entity: EntityInterface,
    metadata: ProjectionMetadata<EntityInterface>,
    readModelEnvelope: ReadModelEnvelope | null,
    readModelId: string
  ) {
    const readModel = readModelEnvelope?.payload;
    const projector = this.getProjectorForReadModel(metadata);

    const nextReadModel = Array.isArray(entity[metadata.joinKey])
      ? projector(entity, readModelId, readModel)
      : projector(entity, readModel);

    this.provider.logger.debug(`[ReadModelStore#projectEntity] Project result:`, nextReadModel);

    return nextReadModel;
  }

  private getProjectorForReadModel(metadata: ProjectionMetadata<EntityInterface>) {
    const projector = (metadata.class as any)[metadata.methodName];

    if (!projector) {
      throw new Error(`No projector registered for read model ${metadata.class.name}`);
    }

    return projector;
  }
}
