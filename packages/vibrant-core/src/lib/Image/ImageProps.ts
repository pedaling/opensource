import type { ResponsiveValue } from '../../types';
import type { BorderSystemProps, MediaSystemProps, SizingSystemProps } from '../props';
import { withVariation } from '../withVariation';

type ImageProps = {
  src: ResponsiveValue<string>;
  ref?: any;
  alt?: string;
  loading?: 'eager' | 'lazy';
} & SizingSystemProps &
  MediaSystemProps &
  BorderSystemProps;

export const withImageVariation = withVariation<ImageProps>('Image')();
