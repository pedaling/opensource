import { cloneElement, useEffect, useRef } from 'react';
import { useCurrentTheme, usePopover, useResponsiveValue } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { isDefined } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { IconButton } from '../IconButton/IconButton';
import { Paper } from '../Paper';
import { Space } from '../Space';
import { VStack } from '../VStack';
import { withPopoverVariation } from './PopoverProps';

const ARROW_SQUARE_SIZE = 10;

export const Popover = withPopoverVariation(
  ({
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
  }) => {
    const { isOpen, open: openPopover, close: closePopover } = usePopover({ id: popoverId, value: open });
    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const { getResponsiveValue } = useResponsiveValue();
    const computedOffset = getResponsiveValue(offset);

    const popoverRef = useRef<HTMLElement>(null);
    const childRef = useRef<HTMLElement>(null);

    const popoverWidth = popoverRef?.current?.offsetWidth ?? 0;
    const popoverHeight = popoverRef?.current?.offsetHeight ?? 0;
    const arrowHeight = Math.sqrt(ARROW_SQUARE_SIZE * ARROW_SQUARE_SIZE * 2) / 2;
    const childWidth = childRef?.current?.offsetWidth ?? 0;
    const childHeight = childRef?.current?.offsetHeight ?? 0;

    const calculatePopoverPosition = () => {
      if (position.includes('top'))
        return {
          x: childWidth / 2 - popoverWidth / 2,
          y: childHeight + arrowHeight + computedOffset,
        };

      if (position.includes('bottom'))
        return {
          x: childWidth / 2 - popoverWidth / 2,
          y: -popoverHeight - arrowHeight - computedOffset,
        };

      if (position.includes('left'))
        return {
          x: childWidth + arrowHeight + computedOffset,
          y: childHeight / 2 - popoverHeight / 2,
        };

      if (position.includes('right'))
        return {
          x: -popoverWidth - arrowHeight - computedOffset,
          y: childHeight / 2 - popoverHeight / 2,
        };
    };

    const calculateArrowPosition = () => {
      switch (position) {
        case 'top':
          return {
            left: popoverWidth / 2 - arrowHeight,
            top: -arrowHeight + 2,
          };

        case 'topStart':
          return {
            left: arrowHeight + arrowOffset,
            top: -arrowHeight + 2,
          };

        case 'topEnd':
          return {
            left: popoverWidth - arrowHeight * 3 - arrowOffset,
            top: -arrowHeight + 2,
          };

        case 'bottom':
          return {
            left: popoverWidth / 2 - arrowHeight,
            top: popoverHeight - arrowHeight + 2,
          };

        case 'bottomStart':
          return {
            left: arrowHeight + arrowOffset,
            top: popoverHeight - arrowHeight + 2,
          };

        case 'bottomEnd':
          return {
            left: popoverWidth - arrowHeight * 3 - arrowOffset,
            top: popoverHeight - arrowHeight + 2,
          };

        case 'left':
          return {
            left: -arrowHeight + 2,
            top: popoverHeight / 2 - arrowHeight + 2,
          };

        case 'leftStart':
          return {
            left: -arrowHeight + 2,
            top: arrowOffset + 2,
          };

        case 'leftEnd':
          return {
            left: -arrowHeight + 2,
            top: popoverHeight - arrowHeight * 2 - arrowOffset + 2,
          };

        case 'right':
          return {
            left: popoverWidth - arrowHeight + 2,
            top: popoverHeight / 2 - arrowHeight + 2,
          };

        case 'rightStart':
          return {
            left: popoverWidth - arrowHeight + 2,
            top: arrowOffset + 2,
          };

        case 'rightEnd':
          return {
            left: popoverWidth - arrowHeight + 2,
            top: popoverHeight - arrowHeight * 2 - arrowOffset + 2,
          };
      }
    };

    useEffect(() => (isOpen ? onOpen?.() : onClose?.()), [isOpen, onClose, onOpen]);

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
                      <Body level={2} weight="regular">
                        {title}
                      </Body>
                    )}
                    {isDefined(title) && showCloseButton && <Space width={6} />}
                    {showCloseButton && (
                      <VStack>
                        <IconButton IconComponent={Icon.Close.Thin} size="sm" onClick={closePopover} />
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
  }
);
