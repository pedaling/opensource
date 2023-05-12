import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type PopoverOpenerProps = {
  popoverId?: string;
  children?: ReactElement;
  openInteraction: 'click' | 'hover';
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
);

export const withPopoverOpenerVariation = withVariation<PopoverOpenerProps>('PopoverOpene')();
