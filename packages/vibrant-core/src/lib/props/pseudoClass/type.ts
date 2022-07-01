import type { ResponsiveValue } from '@vibrant-ui/core';
import type { SystemProps } from '../systemProp';

export type PseudoClassProps = {
  pseudoHover?: ResponsiveValue<SystemProps>;
  pseudoFocus?: ResponsiveValue<SystemProps>;
  pseudoActive?: ResponsiveValue<SystemProps>;
};
