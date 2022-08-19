import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { Position } from '@vibrant-ui/utils';

export type DropdownProps = {
  position: Position;
  renderContents: () => ReactElement;
  renderOpener: (open: () => void) => ReactElement;
  spacing?: number;
  open: boolean;
};

export const withDropdownVariation = withVariation<DropdownProps>('Dropdown')();
