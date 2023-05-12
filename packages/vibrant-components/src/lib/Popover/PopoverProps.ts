import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseColorToken } from '@vibrant-ui/theme';

export type PopoverProps = {
  title?: string;
  renderContent?: () => ReactElement;
  position: PopoverPositionType;
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

type PopoverPositionType =
  | 'bottom'
  | 'bottomEnd'
  | 'bottomStart'
  | 'left'
  | 'leftEnd'
  | 'leftStart'
  | 'right'
  | 'rightEnd'
  | 'rightStart'
  | 'top'
  | 'topEnd'
  | 'topStart';

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
