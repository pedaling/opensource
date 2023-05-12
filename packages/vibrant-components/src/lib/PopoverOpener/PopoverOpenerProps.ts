import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type PopoverOpenerProps = {
  popoverId?: string;
  children?: ReactElement;
} & (
  | {
      isOpen?: boolean;
      open?: () => void;
      close?: () => void;
    }
  | {
      isOpen?: never;
      open?: never;
      close?: never;
    }
) &
  ({ openToHover?: false | undefined; openToClick?: true } | { openToHover?: true; openToClick?: false | undefined });

export const withPopoverOpenerVariation = withVariation<PopoverOpenerProps>('PopoverOpene')();
