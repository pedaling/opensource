import { withVariation } from '@vibrant-ui/core';
import type { BackgroundSystemProps, ReactElementChild, ResponsiveValue, SizingSystemProps } from '@vibrant-ui/core';

export type MinInsets = {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
};

export type SafeAreaViewProps = BackgroundSystemProps &
  SizingSystemProps & {
    children: ReactElementChild;
    mode?: 'margin' | 'padding';
    edges?: ('bottom' | 'left' | 'right' | 'top')[];
    height?: ResponsiveValue<number | string>;
    width?: ResponsiveValue<number | string>;
    minInsets?: MinInsets;
  };

export const withSafeAreaViewVariation = withVariation<SafeAreaViewProps>('SafeAreaView')();
