import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type DrawerProps = {
  testId?: string;
  children: ReactElement[];
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  renderOpener?: (_: { open: () => void; isOpen: boolean }) => ReactElement;
  open?: boolean;
};

export const withDrawerVariation = withVariation<DrawerProps>('Drawer')();
