import { Service } from 'typedi';
import type { Class } from '@helix-js/utils';
import type { EntityInterface } from './concepts';
import { EntityStore } from './services/EntityStore';

@Service()
export class EntityReader {
  private readonly entityStore = new EntityStore();

  public async find<EntityType extends EntityInterface>(entityClass: Class<EntityType>, id: string) {
    const entity = await this.findOrNull(entityClass, id);

    if (!entity) {
      throw new Error(`Entity not found for ${entityClass.name} with id ${id}`);
    }

    return entity;
  }

  public async findOrNull<EntityType extends EntityInterface>(entityClass: Class<EntityType>, id: string) {
    const snapshot = await this.entityStore.fetchSnapshot(entityClass.name, id);

    return snapshot && snapshot.deletedAt < 0
      ? Object.assign(new entityClass(snapshot.payload), snapshot.payload)
      : null;
  }
}
