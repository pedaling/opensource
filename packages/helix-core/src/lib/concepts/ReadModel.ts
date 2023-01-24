import type { PropertyKeys } from '@helix-js/utils';

export enum ReadModelAction {
  Delete = 'delete',
  None = 'none',
}

export type ReadModelInterface = {
  id: string;
  [key: string]: any;
};

export type ReadModelAttrs<ReadModelType> = Pick<ReadModelType, Exclude<PropertyKeys<ReadModelType>, 'id'>>;
