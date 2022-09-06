import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type Edge = {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
};

export type SafeAreaViewProps = {
  children: ReactElementChild;
  mode?: 'margin' | 'padding';
  edges?: Edge;
  height?: number | string;
  width?: number | string;
  insets?: ('bottom' | 'left' | 'right' | 'top')[];
};

export const withSafeAreaViewVariation = withVariation<SafeAreaViewProps>('SafeAreaView')();
