import type { EventEnvelope } from '../envelopes';
import { EntityEnvelope } from '../envelopes';
import { getMetadataStorage } from '../metadata';
import { getProvider } from '../Provider';

export class EntityStore {
  private readonly provider = getProvider();

  public async fetchSnapshot(entityName: string, entityId: string) {
    this.provider.logger.debug(
      `[EntityStore#fetchSnapshot] Fetching snapshot for entity ${entityName} with ID ${entityId}`
    );

    const latestSnapshot = await this.provider.entities.find(entityName, entityId);

    this.provider.logger.debug(
      `[EntityStore#fetchSnapshot] Found snapshot for entity ${entityName} with ID ${entityId}:`,
      latestSnapshot
    );

    const since = latestSnapshot?.appliedEventCreatedAt ?? 0;
    const pendingEventEnvelopes = await this.loadEventStreamSince(entityName, entityId, since);

    this.provider.logger.debug(
      `[EntityReader#findOrNull] Streaming the following events for entity ${entityName} with ID ${entityId}:`,
      pendingEventEnvelopes
    );

    const nextSnapshot = pendingEventEnvelopes.reduce(
      (entity, event) => this.reduceEvent(entity, event),
      latestSnapshot
    );

    return nextSnapshot;
  }

  public async calculateAndStoreSnapshot(typeName: string, id: string, pendingEventEnvelopes: EventEnvelope[]) {
    this.provider.logger.debug(
      `[EntityStore#calculateAndStoreSnapshot] Fetching snapshot for entity ${typeName} with ID ${id}`
    );

    const latestSnapshot = await this.provider.entities.find(typeName, id);

    this.provider.logger.debug(
      `[EntityStore#calculateAndStoreSnapshot] Found snapshot for entity ${typeName} with ID ${id}:`,
      latestSnapshot
    );

    const nextSnapshot = pendingEventEnvelopes.reduce(
      (entity, event) => this.reduceEvent(entity, event),
      latestSnapshot
    );

    if (!nextSnapshot) {
      return latestSnapshot;
    }

    await this.provider.entities.store(nextSnapshot);

    return nextSnapshot;
  }

  private async loadEventStreamSince(entityName: string, entityId: string, since: number) {
    this.provider.logger.debug(
      `[EntityReader#loadEventStreamSince] Loading list of pending events for entity ${entityName} with id ${entityId}`
    );

    return this.provider.events.forEntitySince(entityName, entityId, since);
  }

  private reduceEvent(entityEnvelope: EntityEnvelope | null, eventEnvelope: EventEnvelope) {
    const entity = entityEnvelope?.instance;
    const event = eventEnvelope.instance;
    const reducer = this.getReducerForEvent(eventEnvelope.typeName);

    const nextEntity = reducer(event, entity);
    const nextSnapshot = new EntityEnvelope(nextEntity, {
      appliedEventCreatedAt: eventEnvelope.createdAt,
    });

    this.provider.logger.debug(`[EntityStore#reduceEvent] Reducer result:`, nextEntity);

    return nextSnapshot;
  }

  private getReducerForEvent(eventName: string) {
    const reducerMetadata = getMetadataStorage().reducers[eventName];

    if (!reducerMetadata) {
      throw new Error(`No reducer registered for event ${eventName}`);
    }

    const reducer = (reducerMetadata.class as any)[reducerMetadata.methodName];

    if (!reducer) {
      throw new Error(`No reducer registered for event ${eventName} and entity ${reducerMetadata.class.name}`);
    }

    this.provider.logger.debug(
      `[EntityStore#getReducerForEvent] Found reducer for event ${eventName}: "${reducerMetadata.class.name}.${reducerMetadata.methodName}"`
    );

    return reducer;
  }
}
