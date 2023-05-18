import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseColorToken } from '@vibrant-ui/theme';
import type { Position } from '@vibrant-ui/utils';

export type PopoverProps = {
  title?: string;
  renderContent?: () => ReactElement;
  position: Position;
  showCloseButton?: boolean;
  backgroundColor?: BaseColorToken;
  maxWidth?: ResponsiveValue<number | `${number}%`>;
  offset?: ResponsiveValue<number>;
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  children?: ReactElement;
  popoverId?: string;
} & ({ title: string; renderContent?: () => ReactElement } | { title?: string; renderContent: () => ReactElement }) &
  PopoverArrowType;

type PopoverArrowType =
  | {
      showArrow?: false | undefined;
      arrowOffset?: never;
    }
  | {
      showArrow?: true;
      arrowOffset?: number;
    };

export const withPopoverVariation = withVariation<PopoverProps>('Popover')();
