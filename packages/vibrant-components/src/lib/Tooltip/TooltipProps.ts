import type { RefObject } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Position } from '@vibrant-ui/utils';

export type TooltipProps = {
  children: ReactElementChild;
  content: ReactElementChild | string;
  offset?: number;
  maxWidth?: number;
  position?: Position;
  enterDelay?: number;
  leaveDelay?: number;
  onClose?: () => void;
  onOpen?: () => void;
  anchorRef?: RefObject<any>;
  testId?: string;
};

export const withTooltipVariation = withVariation<TooltipProps>('Tooltip')();
