import type { PropertyKeys } from '@helix-js/utils';

export interface EventInterface {
  getEntityId: () => string;
}

export type EventAttrs<EventType> = Pick<EventType, PropertyKeys<EventType>>;
