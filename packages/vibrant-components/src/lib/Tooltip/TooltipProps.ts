import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Position } from '@vibrant-ui/utils';

export type TooltipProps = {
  children: ReactElementChild;
  content: ReactElementChild | string;
  spacing?: number;
  maxWidth?: number;
  position?: Position;
  enterDelay?: number;
  enterTouchDelay?: number;
  leaveDelay?: number;
  leaveTouchDelay?: number;
  onClose?: () => void;
  onOpen?: () => void;
};

export const withTooltipVariation = withVariation<TooltipProps>('Tooltip')();
