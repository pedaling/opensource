import type { Class, TypedMethodDescriptor } from '@helix-js/utils';
import type { EntityInterface, EventInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';

export function Reduces<EventType extends EventInterface>(
  eventClass: Class<EventType>
): <EntityType extends EntityInterface>(
  entityClass: Class<EntityType>,
  methodName: string,
  methodDecorator: ReducerMethod<EventType, EntityType>
) => void {
  return (entityClass, methodName) => {
    const reducer = getMetadataStorage().reducers[eventClass.name];

    if (reducer) {
      throw new Error(
        `The event ${eventClass.name} has already registered to be reduced by ${reducer.methodName} in the entity ${reducer.class.name}.`
      );
    }

    getMetadataStorage().reducers[eventClass.name] = {
      class: entityClass,
      methodName,
    };
  };
}

type ReducerMethod<EventType, EntityType> =
  | TypedMethodDescriptor<(event: EventType, entity: EntityType) => EntityType>
  | TypedMethodDescriptor<(event: EventType, entity?: EntityType) => EntityType>;
