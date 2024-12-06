import type { ReactElementChildren, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type ContentAreaProps = {
  padding?: ResponsiveValue<boolean>;
  children: ReactElementChildren;
  testId?: string;
};

export const withContentAreaVariation = withVariation<ContentAreaProps>('ContentArea')();
