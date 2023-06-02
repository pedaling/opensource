import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type DrawerProps = {
  testId?: string;
  children: ReactElement[];
  type?: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export const withDrawerVariation = withVariation<DrawerProps>('Drawer')();
