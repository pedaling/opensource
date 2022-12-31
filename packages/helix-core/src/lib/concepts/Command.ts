import type { PropertyKeys } from '@helix-js/utils';
import type { Register } from './Register';

export interface CommandInterface<ReturnType = unknown> {
  getId?: () => string;
  handle: (register: Register) => Promise<ReturnType>;
}

export type CommandAttrs<CommandType> = Pick<CommandType, PropertyKeys<CommandType>>;
