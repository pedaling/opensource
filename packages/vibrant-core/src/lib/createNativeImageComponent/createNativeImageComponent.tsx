import type { ComponentType } from 'react';
import { forwardRef } from 'react';
import type { ImageRequireSource } from 'react-native';

type ImageComponentType = ComponentType<{
  source?: ImageRequireSource | { uri?: string };
  resizeMode?: 'center' | 'contain' | 'cover' | 'stretch';
}>;

type ImageProps = {
  ref?: any;
  src: ImageRequireSource | string;
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
      source={typeof src === 'string' ? { uri: src } : src}
      resizeMode={objectFit ? ObjectFitResizeModeMap[objectFit] : undefined}
      {...restProps}
    />
  ));
