import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Position } from '@vibrant-ui/utils';

export type DropdownProps = {
  position: Position;
  renderContents: () => ReactElementChild;
  renderOpener: (open: () => void) => ReactElementChild;
  spacing?: number;
  open: boolean;
};

export const withDropdownVariation = withVariation<DropdownProps>('Dropdown')();
