import type { Class } from '@helix-js/utils';
import type { ReadModelInterface } from '../../concepts';

export interface ReadModelMetadata {
  readonly class: Class<ReadModelInterface>;
}
