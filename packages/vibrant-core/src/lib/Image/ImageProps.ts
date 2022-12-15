import type { BorderSystemProps, SizingSystemProps } from '../props';
import { withVariation } from '../withVariation';

type ImageProps = {
  src: string;
  alt?: string;
  loading?: 'eager' | 'lazy';
} & SizingSystemProps &
  BorderSystemProps;

export const withImageVariation = withVariation<ImageProps>('Image')();
