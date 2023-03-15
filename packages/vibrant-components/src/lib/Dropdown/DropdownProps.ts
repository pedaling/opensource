import type { RefObject } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Either, Position } from '@vibrant-ui/utils';

export type DropdownProps = Either<
  { open: boolean },
  {
    defaultOpen?: boolean;
  }
> & {
  renderOpener: (_: { open: () => void; isOpen: boolean; ref: RefObject<any> }) => ReactElementChild;
  position?: Position;
  renderContents: (_: { close: () => void }) => ReactElementChild;
  spacing?: number;
  onClose?: () => void;
  testId?: string;
};

export const withDropdownVariation = withVariation<DropdownProps>('Dropdown')();
