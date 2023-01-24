import type { EntityInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export class EntityEnvelope<EntityType extends EntityInterface = EntityInterface> {
  public readonly id: string;
  public readonly typeName: string;
  public readonly payload: EntityType;
  public readonly schemaVersion: number;

  public readonly deletedAt: number;
  public readonly appliedEventCreatedAt: number;

  public constructor(entity: EntityType, context: { appliedEventCreatedAt: number }) {
    this.id = entity.id;

    this.typeName = entity.constructor.name;

    this.payload = { ...entity };

    this.schemaVersion = getMetadataStorage().currentVersionFor(this.typeName);

    this.deletedAt = entity.deletedAt;

    this.appliedEventCreatedAt = context.appliedEventCreatedAt;
  }
}
