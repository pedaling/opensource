import type { AnyClass } from '@helix-js/utils';

export interface ProjectionMetadata<EntityType> {
  class: AnyClass;
  methodName: string;
  joinKey: keyof EntityType;
}
