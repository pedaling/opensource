import type { PropertyKeys } from '@helix-js/utils';

export type EntityInterface = {
  id: string;
  deletedAt: number;
};

export type EntityAttrs<EntityType> = Pick<EntityType, PropertyKeys<EntityType>>;
