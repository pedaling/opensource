import type { Class } from '@helix-js/utils';
import type { EventInterface } from '../../concepts';

export interface EventMetadata {
  readonly class: Class<EventInterface>;
}
