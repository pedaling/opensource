import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BorderRadiusLevel } from '@vibrant-ui/theme';

export type ImageThumbnailProps = {
  width?: ResponsiveValue<number | string>;
  borderRadius?: ResponsiveValue<BorderRadiusLevel>;
  src: ResponsiveValue<string>;
  loading?: 'eager' | 'lazy';
  dim?: ResponsiveValue<boolean>;
  aspectRatio: number;
  alt?: string;
};

export const withImageThumbnailVariation = withVariation<ImageThumbnailProps>('ImageThumbnail')();
