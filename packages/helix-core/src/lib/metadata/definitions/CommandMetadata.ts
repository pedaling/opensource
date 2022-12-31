import type { Class } from '@helix-js/utils';
import type { CommandInterface } from '../../concepts';

export interface CommandMetadata {
  readonly class: Class<CommandInterface>;
}
