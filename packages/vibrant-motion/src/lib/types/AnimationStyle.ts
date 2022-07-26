import type { ResponsiveValue } from '@vibrant-ui/core';
import type { ColorToken, OpacityToken } from '@vibrant-ui/theme';

export type AnimationStyle = {
  x?: ResponsiveValue<number>;
  y?: ResponsiveValue<number>;
  scale?: ResponsiveValue<number>;
  opacity?: ResponsiveValue<OpacityToken | number>;
  backgroundColor?: ResponsiveValue<ColorToken>;
  borderColor?: ResponsiveValue<ColorToken>;
};
