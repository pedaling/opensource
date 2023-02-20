import type { ComponentType } from 'react';
import { forwardRef } from 'react';

type ImageComponentType = ComponentType<{
  source: { uri: string };
}>;

type ImageProps = {
  ref?: any;
  src: string;
};

export const createNativeImageComponent = (ImageComponent: ImageComponentType) =>
  forwardRef<any, ImageProps>(({ src, ...restProps }, ref) => (
    <ImageComponent ref={ref} source={{ uri: src }} {...restProps} />
  ));
