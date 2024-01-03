import type { ResponsiveValue } from '@vibrant-ui/core';

export type TransformMotionProps = {
  x?: ResponsiveValue<number | `${number}%`>;
  y?: ResponsiveValue<number | `${number}%`>;
  rotate?: ResponsiveValue<string>;
  scale?: ResponsiveValue<number>;
};
