import type { ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type ContentAreaProps = {
  padding?: ResponsiveValue<boolean>;
  children: ReactElementChild;
};

export const withContentAreaVariation = withVariation<ContentAreaProps>('ContentArea')();
