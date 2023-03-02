import type { ResponsiveValue } from '../../../types';

export type GridSystemProps = {
  gridTemplateColumns?: ResponsiveValue<string>;
  columnGap?: ResponsiveValue<number>;
  rowGap?: ResponsiveValue<number>;
  gap?: ResponsiveValue<number>;
};
