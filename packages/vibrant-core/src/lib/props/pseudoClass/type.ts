import type { ResponsiveValue } from '../../../types';
import type { SystemProps } from '../systemProp';

export type PseudoClassProps = {
  pseudoHover?: ResponsiveValue<SystemProps>;
  pseudoFocus?: ResponsiveValue<SystemProps>;
  pseudoActive?: ResponsiveValue<SystemProps>;
  pseudoBefore?: ResponsiveValue<SystemProps>;
  pseudoAfter?: ResponsiveValue<SystemProps>;
  pseudoPlaceholder?: ResponsiveValue<SystemProps>;
};
