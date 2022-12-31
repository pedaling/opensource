import type { PropertyKeys } from '@helix-js/utils';

export enum ReadModelAction {
  Delete = 'delete',
  None = 'none',
}

export interface ReadModelInterface {
  getId: () => string;
}

export type ReadModelAttrs<EventType> = Pick<EventType, PropertyKeys<EventType>>;
