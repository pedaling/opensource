import type { Class } from '@helix-js/utils';
import type { EntityInterface } from '../../concepts';

export interface EntityMetadata {
  readonly class: Class<EntityInterface>;
}
