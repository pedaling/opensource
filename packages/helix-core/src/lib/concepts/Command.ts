import type { PropertyKeys } from '@helix-js/utils';
import type { Register } from './Register';

export interface CommandInterface<ReturnType = unknown> {
  id?: string;
  handle: (register: Register) => Promise<ReturnType>;
}

export type CommandAttrs<CommandType> = Pick<CommandType, Exclude<PropertyKeys<CommandType>, 'id'>>;
