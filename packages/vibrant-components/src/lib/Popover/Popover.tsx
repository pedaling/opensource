/* eslint-disable max-lines */
import { cloneElement, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, getWindowDimensions, isNative, useCurrentTheme, usePopover, useResponsiveValue } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { getElementRect, isDefined, useCallbackRef } from '@vibrant-ui/utils';
import type { Position } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { IconButton } from '../IconButton';
import { Paper } from '../Paper';
import { PopoverOpener } from '../PopoverOpener/PopoverOpener';
import { Space } from '../Space';
import { VStack } from '../VStack';
import type { PopoverProps } from './PopoverProps';

const ARROW_TRIANGLE_SIZE = 5;
const TRANSITION_DURATION = 200;

type PopoverPosition = {
  left: number;
  top: number;
};

type ArrowPosition = {
  left: number;
  top: number;
};

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
): { popover: PopoverPosition; arrow: ArrowPosition } => {
  const halfPopoverWidth = popoverWidth / 2;
  const halfPopoverHeight = popoverHeight / 2;
  const halfChildWidth = childWidth / 2;
  const halfChildHeight = childHeight / 2;
  const arrowHeight = Math.sqrt(ARROW_TRIANGLE_SIZE * ARROW_TRIANGLE_SIZE * 2) / 2;
  const positiveArrowOffset = Math.max(arrowOffset, 0);
  const { leftMax, rightMax, topMax, bottomMax } = calculateArrowPositions(popoverWidth, popoverHeight);

  const positions: Record<Position, { popover: PopoverPosition; arrow: ArrowPosition }> = {
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

const PopoverContent = memo(
  ({
    title,
    renderContent,
    showCloseButton,
    backgroundColor,
    maxWidth,
    onClose,
    popoverRef,
    popoverWidth,
    showArrow,
    arrowPosition,
    isOpen,
    popoverPosition,
    onLayout,
    containerZIndex,
  }: {
    title?: string;
    renderContent?: () => React.ReactNode;
    showCloseButton: boolean;
    backgroundColor: string;
    maxWidth?: number | string;
    onClose: () => void;
    popoverRef: React.RefObject<HTMLElement>;
    popoverWidth: number | string;
    showArrow: boolean;
    arrowPosition: ArrowPosition;
    isOpen: boolean;
    popoverPosition: PopoverPosition;
    onLayout: () => void;
    containerZIndex: number;
  }) => {
    const titleContent = useMemo(() => {
      if (!isDefined(title)) {
        return null;
      }

      return (
        <HStack overflow={isNative ? 'visible' : 'hidden'}>
          <Body
            level={2}
            weight="regular"
            {...(maxWidth
              ? {
                  wordBreak: 'keep-all',
                  wordWrap: 'break-word',
                  ...(!isNative ? { maxWidth: '-webkit-fill-available' } : {}),
                }
              : { whiteSpace: 'nowrap' })}
          >
            {title}
          </Body>
        </HStack>
      );
    }, [title, maxWidth]);

    const closeButton = useMemo(() => {
      if (!showCloseButton) {
        return null;
      }

      return (
        <VStack alignVertical="center">
          <IconButton IconComponent={Icon.Close.Thin} size="sm" color="onColor" onClick={onClose} />
        </VStack>
      );
    }, [showCloseButton, onClose]);

    const arrow = useMemo(() => {
      if (!showArrow) {
        return null;
      }

      return (
        <Box
          position="absolute"
          borderWidth={ARROW_TRIANGLE_SIZE}
          borderStyle="solid"
          borderColor={backgroundColor}
          transform={{
            rotate: '45deg',
          }}
          {...arrowPosition}
        />
      );
    }, [showArrow, backgroundColor, arrowPosition]);

    return (
      <VStack position="absolute" zIndex={containerZIndex} {...popoverPosition}>
        <Transition
          animation={{
            opacity: isOpen && (popoverPosition.left !== 0 || popoverPosition.top !== 0) ? 1 : 0,
          }}
          duration={TRANSITION_DURATION}
          easing="easeOutQuad"
        >
          <VStack zIndex={containerZIndex} width={popoverWidth} onLayout={onLayout}>
            <Paper backgroundColor={backgroundColor} rounded="sm">
              <VStack px={12} py={8} ref={popoverRef} width="100%" height="100%">
                <HStack flex={1} alignHorizontal="space-between">
                  {titleContent}
                  {isDefined(title) && showCloseButton && <Space width={6} />}
                  {closeButton}
                </HStack>
                {(isDefined(title) || showCloseButton) && isDefined(renderContent) && <Space width={4} />}
                {renderContent?.()}
              </VStack>
            </Paper>
            {arrow}
          </VStack>
        </Transition>
      </VStack>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';

export const Popover = memo(
  ({
    popoverId = '',
    title,
    renderContent,
    position,
    showCloseButton = true,
    backgroundColor = 'informative',
    maxWidth,
    offset = 8,
    open,
    showArrow = true,
    arrowOffset = 8,
    children,
    zIndex,
    onClose,
    onOpen,
  }: PopoverProps) => {
    const { isOpen, open: openPopover, close: closePopover } = usePopover({ id: popoverId, value: open });
    const {
      theme: { zIndex: themeZIndex },
    } = useCurrentTheme();
    const { getResponsiveValue } = useResponsiveValue();
    const { width: viewportWidth } = getWindowDimensions();
    const computedOffset = getResponsiveValue(offset);
    const computedMaxWidth = getResponsiveValue(maxWidth);

    const [popoverPosition, setPopoverPosition] = useState<PopoverPosition>({ left: 0, top: 0 });
    const [arrowPosition, setArrowPosition] = useState<ArrowPosition>({ left: 0, top: 0 });
    const [isVisible, setIsVisible] = useState(false);

    const popoverRef = useRef<HTMLElement>(null);
    const childRef = useRef<HTMLElement>(null);
    const handleOpen = useCallbackRef(onOpen);
    const handleClose = useCallbackRef(onClose);

    const popoverWidth = useMemo(
      () =>
        computedMaxWidth
          ? typeof computedMaxWidth === 'number'
            ? Math.min(viewportWidth, computedMaxWidth)
            : computedMaxWidth
          : '100%',
      [computedMaxWidth, viewportWidth]
    );

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

    const handleVisibilityChange = useCallback(() => {
      if (isOpen) {
        setIsVisible(true);
        handleOpen?.();
      } else {
        handleClose?.();
        const timer = setTimeout(() => {
          setPopoverPosition({ left: 0, top: 0 });
          setIsVisible(false);
        }, TRANSITION_DURATION);

        return () => clearTimeout(timer);
      }
    }, [isOpen, handleOpen, handleClose]);

    useEffect(() => {
      handleVisibilityChange();
    }, [handleVisibilityChange]);

    useEffect(() => {
      if (isOpen) {
        calculatePositionValue();
      }
    }, [isOpen, calculatePositionValue]);

    const containerZIndex = useMemo(
      () => (isOpen ? zIndex ?? themeZIndex.popover : 0),
      [isOpen, zIndex, themeZIndex.popover]
    );

    const clonedChildren = useMemo(
      () => (children ? cloneElement(children, { isOpen, open: openPopover, close: closePopover }) : null),
      [children, isOpen, openPopover, closePopover]
    );

    return (
      <VStack zIndex={containerZIndex}>
        {isVisible && (
          <PopoverContent
            title={title}
            renderContent={renderContent}
            showCloseButton={showCloseButton}
            backgroundColor={backgroundColor}
            maxWidth={maxWidth}
            onClose={closePopover}
            popoverRef={popoverRef}
            popoverWidth={popoverWidth}
            showArrow={showArrow}
            arrowPosition={arrowPosition}
            isOpen={isOpen}
            popoverPosition={popoverPosition}
            onLayout={calculatePositionValue}
            containerZIndex={containerZIndex}
          />
        )}
        <VStack ref={childRef}>{clonedChildren}</VStack>
      </VStack>
    );
  }
);

Popover.displayName = 'Popover';
Popover.Opener = PopoverOpener;
