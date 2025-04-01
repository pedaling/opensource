/* eslint-disable max-lines */

import { useCallback, useRef, useState } from 'react';
import type { Position } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';

// Types
export type PopoverPosition = {
  left: number;
  top: number;
};

export type ArrowPosition = {
  left: number;
  top: number;
};

export type PositionResult = {
  popover: PopoverPosition;
  arrow: ArrowPosition;
};

// Constants
const ARROW_TRIANGLE_SIZE = 5;

// Helper functions
const calculateArrowPositions = (
  popoverWidth: number,
  popoverHeight: number
): {
  leftMax: number;
  rightMax: number;
  topMax: number;
  bottomMax: number;
} => {
  const arrowHeight = Math.sqrt(ARROW_TRIANGLE_SIZE * ARROW_TRIANGLE_SIZE * 2) / 2;

  return {
    leftMax: arrowHeight,
    rightMax: popoverWidth - arrowHeight * 3 - 3,
    topMax: arrowHeight,
    bottomMax: popoverHeight - arrowHeight * 3 - 3,
  };
};

const calculatePositions = (
  position: Position,
  popoverWidth: number,
  popoverHeight: number,
  childWidth: number,
  childHeight: number,
  arrowOffset: number,
  computedOffset: number
): PositionResult => {
  const halfPopoverWidth = popoverWidth / 2;
  const halfPopoverHeight = popoverHeight / 2;
  const halfChildWidth = childWidth / 2;
  const halfChildHeight = childHeight / 2;
  const arrowHeight = Math.sqrt(ARROW_TRIANGLE_SIZE * ARROW_TRIANGLE_SIZE * 2) / 2;
  const positiveArrowOffset = Math.max(arrowOffset, 0);
  const { leftMax, rightMax, topMax, bottomMax } = calculateArrowPositions(popoverWidth, popoverHeight);

  const positions: Record<Position, PositionResult> = {
    top: {
      popover: {
        left: halfChildWidth - halfPopoverWidth,
        top: -popoverHeight - arrowHeight - computedOffset,
      },
      arrow: {
        left: halfPopoverWidth - arrowHeight,
        top: popoverHeight - arrowHeight - 2,
      },
    },
    'top-start': {
      popover: {
        left: 0,
        top: -popoverHeight - arrowHeight - computedOffset,
      },
      arrow: {
        left: Math.min(leftMax + positiveArrowOffset, rightMax),
        top: popoverHeight - arrowHeight - 2,
      },
    },
    'top-end': {
      popover: {
        left: -popoverWidth + childWidth,
        top: -popoverHeight - arrowHeight - computedOffset,
      },
      arrow: {
        left: Math.max(rightMax - positiveArrowOffset, leftMax),
        top: popoverHeight - arrowHeight - 2,
      },
    },
    bottom: {
      popover: {
        left: halfChildWidth - halfPopoverWidth,
        top: childHeight + arrowHeight + computedOffset,
      },
      arrow: {
        left: halfPopoverWidth - arrowHeight,
        top: -arrowHeight,
      },
    },
    'bottom-start': {
      popover: {
        left: 0,
        top: childHeight + arrowHeight + computedOffset,
      },
      arrow: {
        left: Math.min(leftMax + positiveArrowOffset, rightMax),
        top: -arrowHeight,
      },
    },
    'bottom-end': {
      popover: {
        left: -popoverWidth + childWidth,
        top: childHeight + arrowHeight + computedOffset,
      },
      arrow: {
        left: Math.max(rightMax - positiveArrowOffset, leftMax),
        top: -arrowHeight,
      },
    },
    left: {
      popover: {
        left: -popoverWidth - arrowHeight - computedOffset,
        top: halfChildHeight - halfPopoverHeight,
      },
      arrow: {
        left: popoverWidth - arrowHeight - 2,
        top: halfPopoverHeight - arrowHeight - 2,
      },
    },
    'left-start': {
      popover: {
        left: -popoverWidth - arrowHeight - computedOffset,
        top: 0,
      },
      arrow: {
        left: popoverWidth - arrowHeight - 2,
        top: Math.min(topMax + positiveArrowOffset, bottomMax),
      },
    },
    'left-end': {
      popover: {
        left: -popoverWidth - arrowHeight - computedOffset,
        top: -popoverHeight + childHeight,
      },
      arrow: {
        left: popoverWidth - arrowHeight - 2,
        top: Math.max(bottomMax - positiveArrowOffset, topMax),
      },
    },
    right: {
      popover: {
        left: childWidth + arrowHeight + computedOffset,
        top: halfChildHeight - halfPopoverHeight,
      },
      arrow: {
        left: -arrowHeight - 1,
        top: halfPopoverHeight - arrowHeight - 2,
      },
    },
    'right-start': {
      popover: {
        left: childWidth + arrowHeight + computedOffset,
        top: 0,
      },
      arrow: {
        left: -arrowHeight - 1,
        top: Math.min(topMax + positiveArrowOffset, bottomMax),
      },
    },
    'right-end': {
      popover: {
        left: childWidth + arrowHeight + computedOffset,
        top: -popoverHeight + childHeight,
      },
      arrow: {
        left: -arrowHeight - 1,
        top: Math.max(bottomMax - positiveArrowOffset, topMax),
      },
    },
  };

  return positions[position];
};

/**
 * Hook for handling popover positioning
 */
export const usePopoverPositioning = (position: Position, arrowOffset: number, computedOffset: number) => {
  const [popoverPosition, setPopoverPosition] = useState<PopoverPosition>({ left: 0, top: 0 });
  const [arrowPosition, setArrowPosition] = useState<ArrowPosition>({ left: 0, top: 0 });
  const popoverRef = useRef<HTMLElement>(null);
  const childRef = useRef<HTMLElement>(null);

  const calculatePositionValue = useCallback(async () => {
    if (!popoverRef.current || !childRef.current) {
      return;
    }

    const { width: popoverWidth = 0, height: popoverHeight = 0 } = await getElementRect(popoverRef.current);
    const { width: childWidth, height: childHeight } = await getElementRect(childRef.current);

    const { popover, arrow } = calculatePositions(
      position,
      popoverWidth,
      popoverHeight,
      childWidth,
      childHeight,
      arrowOffset,
      computedOffset
    );

    setPopoverPosition(popover);
    setArrowPosition(arrow);
  }, [position, arrowOffset, computedOffset]);

  return {
    popoverPosition,
    arrowPosition,
    popoverRef,
    childRef,
    calculatePositionValue,
    setPopoverPosition,
  };
};
