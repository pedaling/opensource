import type { ResponsiveValue } from '@class101/design-system-core';
import type { SystemProps } from '../systemProp';

export type PseudoClassProps = {
  pseudoHover?: ResponsiveValue<SystemProps>;
  pseudoFocus?: ResponsiveValue<SystemProps>;
  pseudoActive?: ResponsiveValue<SystemProps>;
};
