import { cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import { Box, useCurrentTheme, usePopover, useResponsiveValue } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { isDefined, useCallbackRef } from '@vibrant-ui/utils';
import type { Position } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { IconButton } from '../IconButton/IconButton';
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
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [arrowPosition, setArrowPosition] = useState({
    left: 0,
    top: 0,
  });
  const [arrowStyle, setArrowStyle] = useState({});
  const computedOffset = getResponsiveValue(offset);

  const popoverRef = useRef<HTMLElement>(null);
  const childRef = useRef<HTMLElement>(null);
  const handleOpen = useCallbackRef(onOpen);
  const handleClose = useCallbackRef(onClose);

  const arrowHeight = Math.sqrt(ARROW_TRIANGLE_SIZE * ARROW_TRIANGLE_SIZE * 2) / 2;

  const popoverWidth = popoverRef?.current?.offsetWidth ?? 0;
  const popoverHeight = popoverRef?.current?.offsetHeight ?? 0;
  const halfPopoverWidth = popoverWidth / 2;
  const halfPopoverHeight = popoverHeight / 2;

  const childWidth = childRef?.current?.offsetWidth ?? 0;
  const childHeight = childRef?.current?.offsetHeight ?? 0;
  const halfChildWidth = childWidth / 2;
  const halfChildHeight = childHeight / 2;

  const calcuratePositionValue = useCallback(
    (position: Position) => {
      if (position.includes('top')) {
        setArrowStyle({
          borderRightColor: backgroundColor,
          borderBottomColor: backgroundColor,
        });

        if (position === 'top') {
          setPopoverPosition({
            x: halfChildWidth - halfPopoverWidth,
            y: -popoverHeight - arrowHeight - computedOffset,
          });

          setArrowPosition({
            left: halfPopoverWidth - arrowHeight,
            top: popoverHeight - arrowHeight - 2,
          });
        }

        if (position === 'top-start') {
          setPopoverPosition({
            x: 0,
            y: -popoverHeight - arrowHeight - computedOffset,
          });

          setArrowPosition({
            left: arrowHeight + arrowOffset,
            top: popoverHeight - arrowHeight - 2,
          });
        }

        if (position === 'top-end') {
          setPopoverPosition({
            x: -popoverWidth + childWidth,
            y: -popoverHeight - arrowHeight - computedOffset,
          });

          setArrowPosition({
            left: popoverWidth - arrowHeight * 3 - arrowOffset,
            top: popoverHeight - arrowHeight - 2,
          });
        }
      }

      if (position.includes('bottom')) {
        setArrowStyle({
          borderTopColor: backgroundColor,
          borderLeftColor: backgroundColor,
        });

        if (position === 'bottom') {
          setPopoverPosition({
            x: halfChildWidth - halfPopoverWidth,
            y: childHeight + arrowHeight + computedOffset,
          });

          setArrowPosition({
            left: halfPopoverWidth - arrowHeight,
            top: -arrowHeight - 1,
          });
        }

        if (position === 'bottom-start') {
          setPopoverPosition({
            x: 0,
            y: childHeight + arrowHeight + computedOffset,
          });

          setArrowPosition({
            left: arrowHeight + arrowOffset,
            top: -arrowHeight - 1,
          });
        }

        if (position === 'bottom-end') {
          setPopoverPosition({
            x: -popoverWidth + childWidth,
            y: childHeight + arrowHeight + computedOffset,
          });

          setArrowPosition({
            left: popoverWidth - arrowHeight * 3 - arrowOffset,
            top: -arrowHeight - 1,
          });
        }
      }

      if (position.includes('left')) {
        setArrowStyle({
          borderTopColor: backgroundColor,
          borderRightColor: backgroundColor,
        });

        if (position === 'left') {
          setPopoverPosition({
            x: -popoverWidth - arrowHeight - computedOffset,
            y: halfChildHeight - halfPopoverHeight,
          });

          setArrowPosition({
            left: popoverWidth - arrowHeight - 2,
            top: halfPopoverHeight - arrowHeight - 2,
          });
        }

        if (position === 'left-start') {
          setPopoverPosition({
            x: -popoverWidth - arrowHeight - computedOffset,
            y: 0,
          });

          setArrowPosition({
            left: popoverWidth - arrowHeight - 2,
            top: arrowOffset - 2,
          });
        }

        if (position === 'left-end') {
          setPopoverPosition({
            x: -popoverWidth - arrowHeight - computedOffset,
            y: -popoverHeight + childHeight,
          });

          setArrowPosition({
            left: popoverWidth - arrowHeight - 2,
            top: popoverHeight - arrowHeight * 2 - arrowOffset,
          });
        }
      }

      if (position.includes('right')) {
        setArrowStyle({
          borderBottomColor: backgroundColor,
          borderLeftColor: backgroundColor,
        });

        if (position === 'right') {
          setPopoverPosition({
            x: childWidth + arrowHeight + computedOffset,
            y: halfChildHeight - halfPopoverHeight,
          });

          setArrowPosition({
            left: -arrowHeight - 1,
            top: halfPopoverHeight - arrowHeight - 2,
          });
        }

        if (position === 'right-start') {
          setPopoverPosition({
            x: childWidth + arrowHeight + computedOffset,
            y: 0,
          });

          setArrowPosition({
            left: -arrowHeight - 1,
            top: arrowOffset - 2,
          });
        }

        if (position === 'right-end') {
          setPopoverPosition({
            x: childWidth + arrowHeight + computedOffset,
            y: -popoverHeight + childHeight,
          });

          setArrowPosition({
            left: -arrowHeight - 1,
            top: popoverHeight - arrowHeight * 2 - arrowOffset,
          });
        }
      }
    },
    [
      arrowHeight,
      arrowOffset,
      backgroundColor,
      childHeight,
      childWidth,
      computedOffset,
      halfChildHeight,
      halfChildWidth,
      halfPopoverHeight,
      halfPopoverWidth,
      popoverHeight,
      popoverWidth,
    ]
  );

  useEffect(() => (isOpen ? handleOpen?.() : handleClose?.()), [isOpen, handleOpen, handleClose]);

  useEffect(() => {
    calcuratePositionValue(position);
  }, [calcuratePositionValue, position]);

  return (
    <VStack>
      <VStack zIndex={isOpen ? zIndex ?? themeZIndex.popover : 0} position="absolute">
        <Transition animation={{ opacity: isOpen ? 1 : 0, ...popoverPosition }} duration={200} easing="easeOutQuad">
          <VStack maxWidth={maxWidth} position="relative" width="100%">
            <Paper backgroundColor={backgroundColor} borderRadiusLevel={1}>
              <VStack px={12} py={8} ref={popoverRef} width="100%">
                <HStack width="100%" alignHorizontal="space-between">
                  {isDefined(title) && (
                    <Body level={2} weight="regular" color="onColor" wordBreak={maxWidth ? 'break-word' : 'normal'}>
                      {title}
                    </Body>
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
              <Transition
                animation={{
                  rotate: '45deg',
                  ...arrowPosition,
                }}
                duration={0}
              >
                <Box
                  position="absolute"
                  borderWidth={ARROW_TRIANGLE_SIZE}
                  borderStyle="solid"
                  borderColor="transparent"
                  {...arrowStyle}
                />
              </Transition>
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
