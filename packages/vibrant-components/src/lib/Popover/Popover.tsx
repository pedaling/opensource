import { cloneElement, useCallback, useEffect, useRef } from 'react';
import { useCurrentTheme, usePopover, useResponsiveValue } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { isDefined, useCallbackRef } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { IconButton } from '../IconButton/IconButton';
import { Paper } from '../Paper';
import { PopoverOpener } from '../PopoverOpener/PopoverOpener';
import { Space } from '../Space';
import { VStack } from '../VStack';
import type { PopoverProps } from './PopoverProps';

const ARROW_SQUARE_SIZE = 10;

export const Popover = ({
  popoverId = '',
  title,
  renderContent,
  position,
  showCloseButton = true,
  backgroundColor = 'background',
  maxWidth = '100%',
  offset = 8,
  open,
  showArrow = true,
  arrowOffset = 8,
  children,
  onClose,
  onOpen,
}: PopoverProps) => {
  const { isOpen, open: openPopover, close: closePopover } = usePopover({ id: popoverId, value: open });
  const {
    theme: { zIndex },
  } = useCurrentTheme();
  const { getResponsiveValue } = useResponsiveValue();
  const computedOffset = getResponsiveValue(offset);

  const popoverRef = useRef<HTMLElement>(null);
  const childRef = useRef<HTMLElement>(null);
  const handleOpen = useCallbackRef(onOpen);
  const handleClose = useCallbackRef(onClose);

  const arrowHeight = Math.sqrt(ARROW_SQUARE_SIZE * ARROW_SQUARE_SIZE * 2) / 2;

  const popoverWidth = popoverRef?.current?.offsetWidth ?? 0;
  const popoverHeight = popoverRef?.current?.offsetHeight ?? 0;
  const halfPopoverWidth = popoverWidth / 2;
  const halfPopoverHeight = popoverHeight / 2;

  const childWidth = childRef?.current?.offsetWidth ?? 0;
  const childHeight = childRef?.current?.offsetHeight ?? 0;
  const halfChildWidth = childWidth / 2;
  const halfChildHeight = childHeight / 2;

  const calculatePopoverPosition = useCallback(() => {
    if (position.includes('top'))
      return {
        x: halfChildWidth - halfPopoverWidth,
        y: -popoverHeight - arrowHeight - computedOffset,
      };

    if (position.includes('bottom'))
      return {
        x: halfChildWidth - halfPopoverWidth,
        y: childHeight + arrowHeight + computedOffset,
      };

    if (position.includes('left'))
      return {
        x: -popoverWidth - arrowHeight - computedOffset,
        y: halfChildHeight - halfPopoverHeight,
      };

    if (position.includes('right'))
      return {
        x: childWidth + arrowHeight + computedOffset,
        y: halfChildHeight - halfPopoverHeight,
      };

    return { x: 0, y: 0 };
  }, [
    arrowHeight,
    childHeight,
    childWidth,
    computedOffset,
    halfChildHeight,
    halfChildWidth,
    halfPopoverHeight,
    halfPopoverWidth,
    popoverHeight,
    popoverWidth,
    position,
  ]);

  const calculateArrowPosition = useCallback(() => {
    switch (position) {
      case 'top':
        return {
          left: halfPopoverWidth - arrowHeight,
          top: popoverHeight - arrowHeight + 2,
        };

      case 'top-start':
        return {
          left: arrowHeight + arrowOffset,
          top: popoverHeight - arrowHeight + 2,
        };

      case 'top-end':
        return {
          left: popoverWidth - arrowHeight * 3 - arrowOffset,
          top: popoverHeight - arrowHeight + 2,
        };

      case 'bottom':
        return {
          left: halfPopoverWidth - arrowHeight,
          top: -arrowHeight + 2,
        };

      case 'bottom-start':
        return {
          left: arrowHeight + arrowOffset,
          top: -arrowHeight + 2,
        };

      case 'bottom-end':
        return {
          left: popoverWidth - arrowHeight * 3 - arrowOffset,
          top: -arrowHeight + 2,
        };

      case 'left':
        return {
          left: popoverWidth - arrowHeight + 2,
          top: halfPopoverHeight - arrowHeight + 2,
        };

      case 'left-start':
        return {
          left: popoverWidth - arrowHeight + 2,
          top: arrowOffset + 2,
        };

      case 'left-end':
        return {
          left: popoverWidth - arrowHeight + 2,
          top: popoverHeight - arrowHeight * 2 - arrowOffset + 2,
        };

      case 'right':
        return {
          left: -arrowHeight + 2,
          top: halfPopoverHeight - arrowHeight + 2,
        };

      case 'right-start':
        return {
          left: -arrowHeight + 2,
          top: arrowOffset + 2,
        };

      case 'right-end':
        return {
          left: -arrowHeight + 2,
          top: popoverHeight - arrowHeight * 2 - arrowOffset + 2,
        };
    }
  }, [arrowHeight, arrowOffset, halfPopoverHeight, halfPopoverWidth, popoverHeight, popoverWidth, position]);

  useEffect(() => (isOpen ? handleOpen?.() : handleClose?.()), [isOpen, handleOpen, handleClose]);

  return (
    <VStack>
      <VStack zIndex={isOpen ? zIndex.popover : 0} position="absolute">
        <Transition
          animation={{ opacity: isOpen ? 1 : 0, ...calculatePopoverPosition() }}
          duration={200}
          easing="easeOutQuad"
        >
          <VStack maxWidth={maxWidth} position="relative" width="100%">
            <Paper backgroundColor={backgroundColor} borderRadiusLevel={1}>
              <VStack px={12} py={8} ref={popoverRef} width="100%">
                <HStack width="100%" alignHorizontal="space-between">
                  {isDefined(title) && (
                    <Body level={2} weight="regular" color="onView1">
                      {title}
                    </Body>
                  )}
                  {isDefined(title) && showCloseButton && <Space width={6} />}
                  {showCloseButton && (
                    <VStack>
                      <IconButton IconComponent={Icon.Close.Thin} size="sm" color="onView1" onClick={closePopover} />
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
                  ...calculateArrowPosition(),
                }}
                duration={0}
              >
                <Paper
                  backgroundColor={backgroundColor}
                  width={ARROW_SQUARE_SIZE}
                  height={ARROW_SQUARE_SIZE}
                  borderRadiusLevel={0}
                  position="absolute"
                />
              </Transition>
            )}
          </VStack>
        </Transition>
      </VStack>
      <VStack ref={childRef} zIndex={zIndex.popover + 1}>
        {children && cloneElement(children, { isOpen, open: openPopover, close: closePopover })}
      </VStack>
    </VStack>
  );
};

Popover.displayName = 'Popover';

Popover.Opener = PopoverOpener;
