import type { Class, TypedMethodDescriptor } from '@helix-js/utils';
import type { EntityInterface, ReadModelAction, ReadModelInterface } from '../concepts';
import { getMetadataStorage } from '../metadata';
import type { ProjectionMetadata } from '../metadata/definitions';

export function Projects<EntityType extends EntityInterface, JoinKeyType extends keyof EntityType = keyof EntityType>(
  originEntityOrName: Class<EntityType> | string,
  joinKey: JoinKeyType
): <ReadModelType extends ReadModelInterface>(
  readModelClass: Class<ReadModelType>,
  methodName: string,
  methodDescriptor: ProjectionMethod<EntityType, ReadModelType, EntityType[JoinKeyType]>
) => void {
  return (readModelClass, methodName) => {
    const originEntityName = typeof originEntityOrName === 'string' ? originEntityOrName : originEntityOrName.name;
    const registeredProjections = getMetadataStorage().projections[originEntityName] ?? [];

    getMetadataStorage().projections[originEntityName] = [
      ...registeredProjections.filter(
        projection =>
          projection.class.name !== readModelClass.name ||
          projection.methodName !== methodName ||
          projection.joinKey !== joinKey
      ),
      {
        class: readModelClass,
        methodName,
        joinKey,
      } as ProjectionMetadata<EntityInterface>,
    ];
  };
}

type ProjectionMethod<EntityType, ReadModelType, PropType> = PropType extends string[]
  ? TypedMethodDescriptor<
      (entity: EntityType, readModelId: string, readModel?: ReadModelType) => ReadModelAction | ReadModelType
    >
  : TypedMethodDescriptor<(entity: EntityType, readModel?: ReadModelType) => ReadModelAction | ReadModelType>;
