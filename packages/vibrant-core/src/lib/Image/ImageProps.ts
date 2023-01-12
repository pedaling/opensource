import type { ResponsiveValue } from '../../types';
import type { BorderSystemProps, MediaSystemProps, SizingSystemProps } from '../props';
import { withVariation } from '../withVariation';

type ImageProps = {
  ref?: any;
  src: ResponsiveValue<string>;
  alt?: string;
  loading?: 'eager' | 'lazy';
} & SizingSystemProps &
  MediaSystemProps &
  BorderSystemProps;

export const withImageVariation = withVariation<ImageProps>('Image')();
