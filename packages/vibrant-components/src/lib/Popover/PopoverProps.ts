import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import type { BaseColorToken } from '@vibrant-ui/theme';
import type { Position } from '@vibrant-ui/utils';

export type PopoverProps = {
  showCloseButton?: boolean;
  backgroundColor?: BaseColorToken;
  maxWidth?: ResponsiveValue<number | `${number}%`>;
  offset?: ResponsiveValue<number>;
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  children?: ReactElement;
  popoverId?: string;
  zIndex?: ResponsiveValue<number>;
} & PopoverContent &
  PopoverArrowType &
  PopoverPosition;

type PopoverContent =
  | { title: string; renderContent?: () => ReactElement }
  | { title?: string; renderContent: () => ReactElement };

type PopoverArrowType =
  | {
      showArrow?: false | undefined;
      arrowOffset?: never;
    }
  | {
      showArrow?: true;
      arrowOffset?: number;
    };

type PopoverPosition =
  | {
      position: 'bottom' | 'top';
      fix?: 'right';
    }
  | {
      position: Exclude<Position, 'bottom' | 'top'>;
      fix?: never;
    };
