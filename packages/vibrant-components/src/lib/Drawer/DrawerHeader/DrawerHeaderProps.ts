import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type DrawerHeaderProps = {
  testId?: string;
  closable?: boolean;
} & (
  | {
      children: ReactElement | ReactElement[];
      title?: never;
    }
  | {
      children?: never;
      title: string;
    }
);

export const withDrawerHeaderVariation = withVariation<DrawerHeaderProps>('DrawerHeader')();
