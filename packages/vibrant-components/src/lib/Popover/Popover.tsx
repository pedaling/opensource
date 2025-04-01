/* eslint-disable max-lines */
import type { ReactElement } from 'react';
import { cloneElement, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, getWindowDimensions, isNative, useCurrentTheme, usePopover, useResponsiveValue } from '@vibrant-ui/core';
import type { ComponentWithRef, ResponsiveValue } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import type { BaseColorToken } from '@vibrant-ui/theme';
import { isDefined, useCallbackRef } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { IconButton } from '../IconButton';
import { Paper } from '../Paper';
import { PopoverOpener } from '../PopoverOpener/PopoverOpener';
import { Space } from '../Space';
import { VStack } from '../VStack';
import type { PopoverProps } from './PopoverProps';
import type { ArrowPosition, PopoverPosition } from './usePopoverPositioning';
import { usePopoverPositioning } from './usePopoverPositioning';

// Constants
const ARROW_TRIANGLE_SIZE = 5;
const TRANSITION_DURATION = 200;

// Props types
type PopoverContentProps = {
  title?: string;
  renderContent?: () => ReactElement;
  showCloseButton: boolean;
  backgroundColor: BaseColorToken;
  maxWidth?: ResponsiveValue<number | `${number}%`>;
  onClose: () => void;
  popoverRef: React.RefObject<HTMLElement>;
  popoverWidth: number | string;
  showArrow: boolean;
  arrowPosition: ArrowPosition;
  isOpen?: boolean;
  popoverPosition: PopoverPosition;
  onLayout: () => void;
  containerZIndex: ResponsiveValue<number>;
};

// Components
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
    isOpen = false,
    popoverPosition,
    onLayout,
    containerZIndex,
  }: PopoverContentProps) => {
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

const PopoverComponent = ({
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

  const { popoverPosition, arrowPosition, popoverRef, childRef, calculatePositionValue, setPopoverPosition } =
    usePopoverPositioning(position, arrowOffset, computedOffset);

  const [isVisible, setIsVisible] = useState(false);

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

  const handleVisibilityChange = useCallback(() => {
    if (isOpen) {
      setIsVisible(true);
      handleOpen?.();

      return undefined;
    } else {
      handleClose?.();
      const timer = setTimeout(() => {
        setPopoverPosition({ left: 0, top: 0 });
        setIsVisible(false);
      }, TRANSITION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isOpen, handleOpen, handleClose, setPopoverPosition]);

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
};

export const Popover = memo(PopoverComponent) as unknown as ComponentWithRef<PopoverProps> & {
  Opener: typeof PopoverOpener;
};

Popover.Opener = PopoverOpener;
Popover.displayName = 'Popover';
