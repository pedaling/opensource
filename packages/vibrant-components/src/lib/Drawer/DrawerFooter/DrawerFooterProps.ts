import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type DrawerFooterProps = {
  children: ReactElement | ReactElement[];
  testId?: string;
};

export const withDrawerFooterVariation = withVariation<DrawerFooterProps>('DrawerFooter')();
