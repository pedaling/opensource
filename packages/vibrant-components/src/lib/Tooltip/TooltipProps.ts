import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Position } from '@vibrant-ui/utils';

export type TooltipProps = {
  content: ReactElementChild | string;
  maxWidth?: number;
  position?: Position;
  open?: boolean;
  enterDelay?: number;
  enterTouchDelay?: number;
  leaveDelay?: number;
  leaveTouchDelay?: number;
  onClose?: () => void;
  onOpen?: () => void;
};

export const withTooltipVariation = withVariation<TooltipProps>('Tooltip')();
