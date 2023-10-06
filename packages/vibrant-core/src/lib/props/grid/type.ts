import type { ResponsiveValue } from '../../../types';

export type GridSystemProps = {
  gridTemplateColumns?: ResponsiveValue<string>;
  gridTemplateRows?: ResponsiveValue<string>;
  gridColumn?: ResponsiveValue<string>;
  gridRow?: ResponsiveValue<string>;
};
