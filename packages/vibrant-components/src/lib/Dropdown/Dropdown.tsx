import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { FC, ReactElement } from 'react';
import { Box, getWindowDimensions } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { detectOverflow, flipPosition, getElementRect, getOffsetByPosition } from '@vibrant-ui/utils';
import type { LayoutEvent, Position, Rect } from '@vibrant-ui/utils';
import { Dismissible } from '../Dismissible';

export type DropdownProps = {
  position: Position;
  renderContents: () => ReactElement;
  renderOpener: (open: () => void) => ReactElement;
  spacing?: number;
  open: boolean;
};

const CONTENT_PADDING = 20;

const getOffsetWithoutOverflowByPosition = (
  openerRect: Rect,
  targetRect: Rect,
  position: Position,
  spacing?: number
) => {
  const { x, y } = getOffsetByPosition({
    referenceRect: openerRect,
    targetRect,
    position,
    spacing,
  });

  const viewport = getWindowDimensions();
  const isOverflowing = detectOverflow({
    viewport,
    targetRect: { ...targetRect, x: openerRect.x + x, y: openerRect.y + y },
  });

  if (!isOverflowing) {
    return { x, y };
  }

  const { x: flippedX, y: flippedY } = getOffsetByPosition({
    referenceRect: openerRect,
    targetRect,
    position: flipPosition(position),
    spacing,
  });

  if (
    !detectOverflow({
      viewport,
      targetRect: {
        ...targetRect,
        x: openerRect.x + flippedX,
        y: openerRect.y + flippedY,
      },
    })
  ) {
    return { x: flippedX, y: flippedY };
  }

  return { x, y };
};

export const Dropdown: FC<DropdownProps> = ({ open, renderOpener, renderContents, position, spacing }) => {
  const openerRef = useRef<HTMLElement>(null);
  const targetRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(open);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState<{ x?: number; y?: number }>({});
  const [contentHeight, setContentHeight] = useState<number>();

  const openPopup = useCallback(async () => {
    if (!openerRef.current || !targetRef.current) {
      return;
    }

    const [openerRect, targetRect] = await Promise.all([
      getElementRect(openerRef.current),
      getElementRect(targetRef.current),
    ]);

    const { x, y } = getOffsetWithoutOverflowByPosition(openerRect, targetRect, position, spacing);

    setOffset({ x, y });

    setVisible(true);
  }, [position, spacing]);

  const handleContentResize = useCallback(
    async ({ layout: { width, height, x, y } }: LayoutEvent) => {
      const openerRect = await getElementRect(openerRef.current);

      const { x: offsetX, y: offsetY } = getOffsetWithoutOverflowByPosition(
        openerRect,
        {
          x,
          y,
          width,
          height: height + CONTENT_PADDING * 2,
        },
        position,
        spacing
      );

      setContentHeight(height);

      setOffset({ x: offsetX, y: offsetY });
    },
    [position, spacing]
  );

  const opener = useMemo(() => renderOpener(() => setIsOpen(!isOpen)), [isOpen, renderOpener]);

  useEffect(() => {
    if (isOpen) {
      openPopup();
    } else {
      setVisible(false);

      setContentHeight(undefined);
    }
  }, [isOpen, openPopup]);

  return (
    <Box position="relative">
      <Box ref={openerRef}>{opener}</Box>
      {isOpen && (
        <Dismissible active={visible} onDismiss={() => setIsOpen(false)}>
          <Transition
            ref={targetRef}
            animation={{
              opacity: visible ? 1 : 0,
              x: offset.x,
              y: offset.y,
            }}
            duration={150}
            style={{
              x: offset.x,
              y: offset.y,
            }}
          >
            <Box position="absolute" zIndex={1}>
              <Box backgroundColor="background" py={CONTENT_PADDING} elevationLevel={4} borderRadiusLevel={1}>
                <Transition
                  animation={
                    visible
                      ? {
                          ...(contentHeight ? { height: contentHeight } : {}),
                        }
                      : {}
                  }
                  duration={150}
                >
                  <Box overflow="hidden">
                    <Box onLayout={handleContentResize} flexShrink={0}>
                      {renderContents()}
                    </Box>
                  </Box>
                </Transition>
              </Box>
            </Box>
          </Transition>
        </Dismissible>
      )}
    </Box>
  );
};
