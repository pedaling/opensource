import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Position } from '@vibrant-ui/utils';

export type DropdownProps = {
  position?: Position;
  renderContents: (close: () => void) => ReactElementChild;
  renderOpener: (open: () => void) => ReactElementChild;
  spacing?: number;
  open: boolean;
  onClose?: () => void;
};

export const withDropdownVariation = withVariation<DropdownProps>('Dropdown')();
