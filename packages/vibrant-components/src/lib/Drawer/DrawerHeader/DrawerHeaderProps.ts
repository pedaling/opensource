import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type DrawerHeaderProps = {
  children: ReactElement | ReactElement[];
  testId?: string;
  title?: string;
  closable?: boolean;
};

export const withDrawerHeaderVariation = withVariation<DrawerHeaderProps>('DrawerHeader')();
