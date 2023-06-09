import type { ImageRequireSource } from 'react-native';
import type { ResponsiveValue } from '../../types';
import type { BorderSystemProps, MediaSystemProps, SizingSystemProps } from '../props';
import { withVariation } from '../withVariation';

export type ImageProps = {
  src: ResponsiveValue<ImageRequireSource | string>;
  ref?: any;
  alt?: string;
  loading?: 'eager' | 'lazy';
  sizes?: ResponsiveValue<number>;
  draggable?: boolean;
  testId?: string;
  onError?: () => void;
} & SizingSystemProps &
  MediaSystemProps &
  BorderSystemProps;

export const withImageVariation = withVariation<ImageProps>('Image')();
