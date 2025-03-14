import { cloneElement, useCallback, useEffect, useRef, useState } from 'react';
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

export const Popover = ({
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
  const [popoverPosition, setPopoverPosition] = useState({ left: 0, top: 0 });
  const [arrowPosition, setArrowPosition] = useState({
    left: 0,
    top: 0,
  });
  const { width: viewportWidth } = getWindowDimensions();
  const computedOffset = getResponsiveValue(offset);
  const computedMaxWidth = getResponsiveValue(maxWidth);

  const popoverRef = useRef<HTMLElement>(null);
  const childRef = useRef<HTMLElement>(null);
  const handleOpen = useCallbackRef(onOpen);
  const handleClose = useCallbackRef(onClose);

  const popoverWidth = computedMaxWidth
    ? typeof computedMaxWidth === 'number'
      ? Math.min(viewportWidth, computedMaxWidth)
      : computedMaxWidth
    : '100%';
  const arrowHeight = Math.sqrt(ARROW_TRIANGLE_SIZE * ARROW_TRIANGLE_SIZE * 2) / 2;

  const calculatePositionValue = useCallback(
    async (position: Position) => {
      const { width: popoverWidth = 0, height: popoverHeight = 0 } = await getElementRect(popoverRef.current);
      const { width: childWidth, height: childHeight } = await getElementRect(childRef.current);

      const halfPopoverWidth = popoverWidth / 2;
      const halfPopoverHeight = popoverHeight / 2;
      const halfChildWidth = childWidth / 2;
      const halfChildHeight = childHeight / 2;

      const arrowLeftMaxDistance = arrowHeight;
      const arrowRightMaxDistance = popoverWidth - arrowHeight * 3 - 3;
      const arrowTopMaxDistance = arrowHeight;
      const arrowBottomMaxDistance = popoverHeight - arrowHeight * 3 - 3;
      const positiveArrowOffset = Math.max(arrowOffset, 0);

      if (position.includes('top')) {
        if (position === 'top') {
          setPopoverPosition({
            left: halfChildWidth - halfPopoverWidth,
            top: -popoverHeight - arrowHeight - computedOffset,
          });

          setArrowPosition({
            left: halfPopoverWidth - arrowHeight,
            top: popoverHeight - arrowHeight - 2,
          });
        }

        if (position === 'top-start') {
          setPopoverPosition({
            left: 0,
            top: -popoverHeight - arrowHeight - computedOffset,
          });

          setArrowPosition({
            left: Math.min(arrowLeftMaxDistance + positiveArrowOffset, arrowRightMaxDistance),
            top: popoverHeight - arrowHeight - 2,
          });
        }

        if (position === 'top-end') {
          setPopoverPosition({
            left: -popoverWidth + childWidth,
            top: -popoverHeight - arrowHeight - computedOffset,
          });

          setArrowPosition({
            left: Math.max(arrowRightMaxDistance - positiveArrowOffset, arrowLeftMaxDistance),
            top: popoverHeight - arrowHeight - 2,
          });
        }
      }

      if (position.includes('bottom')) {
        if (position === 'bottom') {
          setPopoverPosition({
            left: halfChildWidth - halfPopoverWidth,
            top: childHeight + arrowHeight + computedOffset,
          });

          setArrowPosition({
            left: halfPopoverWidth - arrowHeight,
            top: -arrowHeight,
          });
        }

        if (position === 'bottom-start') {
          setPopoverPosition({
            left: 0,
            top: childHeight + arrowHeight + computedOffset,
          });

          setArrowPosition({
            left: Math.min(arrowLeftMaxDistance + positiveArrowOffset, arrowRightMaxDistance),
            top: -arrowHeight,
          });
        }

        if (position === 'bottom-end') {
          setPopoverPosition({
            left: -popoverWidth + childWidth,
            top: childHeight + arrowHeight + computedOffset,
          });

          setArrowPosition({
            left: Math.max(arrowRightMaxDistance - positiveArrowOffset, arrowLeftMaxDistance),
            top: -arrowHeight,
          });
        }
      }

      if (position.includes('left')) {
        if (position === 'left') {
          setPopoverPosition({
            left: -popoverWidth - arrowHeight - computedOffset,
            top: halfChildHeight - halfPopoverHeight,
          });

          setArrowPosition({
            left: popoverWidth - arrowHeight - 2,
            top: halfPopoverHeight - arrowHeight - 2,
          });
        }

        if (position === 'left-start') {
          setPopoverPosition({
            left: -popoverWidth - arrowHeight - computedOffset,
            top: 0,
          });

          setArrowPosition({
            left: popoverWidth - arrowHeight - 2,
            top: Math.min(arrowTopMaxDistance + positiveArrowOffset, arrowBottomMaxDistance),
          });
        }

        if (position === 'left-end') {
          setPopoverPosition({
            left: -popoverWidth - arrowHeight - computedOffset,
            top: -popoverHeight + childHeight,
          });

          setArrowPosition({
            left: popoverWidth - arrowHeight - 2,
            top: Math.max(arrowBottomMaxDistance - positiveArrowOffset, arrowTopMaxDistance),
          });
        }
      }

      if (position.includes('right')) {
        if (position === 'right') {
          setPopoverPosition({
            left: childWidth + arrowHeight + computedOffset,
            top: halfChildHeight - halfPopoverHeight,
          });

          setArrowPosition({
            left: -arrowHeight - 1,
            top: halfPopoverHeight - arrowHeight - 2,
          });
        }

        if (position === 'right-start') {
          setPopoverPosition({
            left: childWidth + arrowHeight + computedOffset,
            top: 0,
          });

          setArrowPosition({
            left: -arrowHeight - 1,
            top: Math.min(arrowTopMaxDistance + positiveArrowOffset, arrowBottomMaxDistance),
          });
        }

        if (position === 'right-end') {
          setPopoverPosition({
            left: childWidth + arrowHeight + computedOffset,
            top: -popoverHeight + childHeight,
          });

          setArrowPosition({
            left: -arrowHeight - 1,
            top: Math.max(arrowBottomMaxDistance - positiveArrowOffset, arrowTopMaxDistance),
          });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [arrowHeight, arrowOffset, backgroundColor, computedOffset, title]
  );

  useEffect(() => (isOpen ? handleOpen?.() : handleClose?.()), [isOpen, handleOpen, handleClose]);

  useEffect(() => {
    calculatePositionValue(position);
  }, [calculatePositionValue, position]);

  const layoutHandler = useCallback(() => {
    calculatePositionValue(position);
  }, [calculatePositionValue, position]);

  const containerZIndex = isOpen ? zIndex ?? themeZIndex.popover : 0;

  return (
    <VStack zIndex={containerZIndex}>
      <VStack position="absolute" zIndex={containerZIndex} {...popoverPosition}>
        <Transition
          animation={{
            opacity: isOpen && (popoverPosition.left !== 0 || popoverPosition.top !== 0) ? 1 : 0,
          }}
          duration={200}
          easing="easeOutQuad"
        >
          <VStack zIndex={containerZIndex} width={popoverWidth} onLayout={layoutHandler}>
            <Paper backgroundColor={backgroundColor} rounded="sm">
              <VStack px={12} py={8} ref={popoverRef} width="100%" height="100%">
                <HStack flex={1} alignHorizontal="space-between">
                  {isDefined(title) && (
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
                  )}
                  {isDefined(title) && showCloseButton && <Space width={6} />}
                  {showCloseButton && (
                    <VStack alignVertical="center">
                      <IconButton IconComponent={Icon.Close.Thin} size="sm" color="onColor" onClick={closePopover} />
                    </VStack>
                  )}
                </HStack>
                {(isDefined(title) || showCloseButton) && isDefined(renderContent) && <Space width={4} />}
                {renderContent?.()}
              </VStack>
            </Paper>

            {showArrow && (
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
            )}
          </VStack>
        </Transition>
      </VStack>
      <VStack ref={childRef}>
        {children && cloneElement(children, { isOpen, open: openPopover, close: closePopover })}
      </VStack>
    </VStack>
  );
};

Popover.displayName = 'Popover';

Popover.Opener = PopoverOpener;
