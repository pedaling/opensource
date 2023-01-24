import type { PropertyKeys } from '@helix-js/utils';

export type EventInterface = {
  entityId: string;
};

export type EventAttrs<EventType> = Pick<EventType, Exclude<PropertyKeys<EventType>, 'entityId'>>;
