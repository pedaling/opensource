import type { ImageProps, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type ImageThumbnailProps = {
  dim?: ResponsiveValue<boolean>;
  aspectRatio: number;
  testId?: string;
} & Pick<ImageProps, 'alt' | 'borderRadiusLevel' | 'loading' | 'objectFit' | 'rounded' | 'sizes' | 'src' | 'width'>;

export const withImageThumbnailVariation = withVariation<ImageThumbnailProps>('ImageThumbnail')();
