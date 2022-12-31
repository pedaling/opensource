import type { PropertyKeys } from '@helix-js/utils';

export interface EntityInterface {
  deletedAt: number;
  getId: () => string;
}

export type EntityAttrs<EventType> = Pick<EventType, PropertyKeys<EventType>>;
