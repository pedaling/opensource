import type { ComponentType } from 'react';
import { forwardRef } from 'react';

type ImageComponentType = ComponentType<{
  source: { uri: string };
  resizeMode?: 'center' | 'contain' | 'cover' | 'stretch';
}>;

type ImageProps = {
  ref?: any;
  src: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none';
};

const ObjectFitResizeModeMap = {
  contain: 'contain',
  cover: 'cover',
  fill: 'stretch',
  none: 'center',
} as const;

export const createNativeImageComponent = (ImageComponent: ImageComponentType) =>
  forwardRef<any, ImageProps>(({ src, objectFit, ...restProps }, ref) => (
    <ImageComponent
      ref={ref}
      source={{ uri: src }}
      resizeMode={objectFit ? ObjectFitResizeModeMap[objectFit] : undefined}
      {...restProps}
    />
  ));
