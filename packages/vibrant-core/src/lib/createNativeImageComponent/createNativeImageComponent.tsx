import type { ComponentType } from 'react';
import { forwardRef } from 'react';
import type { ImageRequireSource } from 'react-native';
import { Box } from '../Box';
import type { MediaSystemProps } from '../props';
import { useResponsiveValue } from '../useResponsiveValue';

type ImageComponentType = ComponentType<{
  source?: ImageRequireSource | { uri?: string };
  resizeMode?: 'center' | 'contain' | 'cover' | 'stretch';
}>;

type ImageProps = {
  ref?: any;
  src: ImageRequireSource | string;
} & MediaSystemProps;

const ObjectFitResizeModeMap = {
  contain: 'contain',
  cover: 'cover',
  fill: 'stretch',
  none: 'center',
} as const;

export const createNativeImageComponent = (ImageComponent: ImageComponentType) =>
  forwardRef<any, ImageProps>(({ src, objectFit, ...restProps }, ref) => {
    // TODO: react-native 0.71로 버전 업 시 objectFit을 resizeMode로 변환하지 않습니다
    const { getResponsiveValue } = useResponsiveValue();

    return (
      <Box
        base={ImageComponent}
        ref={ref}
        source={typeof src === 'string' ? { uri: src } : src}
        resizeMode={objectFit ? ObjectFitResizeModeMap[getResponsiveValue(objectFit)] : undefined}
        {...restProps}
      />
    );
  });
