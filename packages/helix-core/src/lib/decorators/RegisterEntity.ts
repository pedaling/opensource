import type { Class } from '@helix-js/utils';
import type { EntityInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export function RegisterEntity(): <EntityType extends EntityInterface>(entityClass: Class<EntityType>) => void {
  return entityClass => {
    if (getMetadataStorage().entities[entityClass.name]) {
      throw new Error(`An entity called ${entityClass.name} has already been registered.`);
    }

    getMetadataStorage().entities[entityClass.name] = {
      class: entityClass,
    };
  };
}
