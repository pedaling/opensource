import type { Class } from '@helix-js/utils';
import type { EntityInterface } from '../../concepts';

export interface ReducerMetadata {
  class: Class<EntityInterface>;
  methodName: string;
}
