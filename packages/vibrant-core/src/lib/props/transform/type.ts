import type { ResponsiveValue } from '../../types';

export type Translate = {
  rotate?: string;
  rotateX?: string;
  rotateY?: string;
  rotateZ?: string;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  translateX?: number;
  translateY?: number;
  skewX?: string;
  skewY?: string;
};

export type TransformProps = {
  transform?: ResponsiveValue<Translate>;
};
