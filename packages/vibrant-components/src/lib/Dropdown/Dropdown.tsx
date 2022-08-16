import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FC, ReactElement } from "react";
import { Box } from "@vibrant-ui/core";
import { Transition } from "@vibrant-ui/motion";
import {
  getElementRect,
  LayoutEvent,
  detectOverflow,
  flipPosition,
  getOffsetByPosition,
} from "@vibrant-ui/utils";
import type { Position } from "@vibrant-ui/utils";
import { Dismissible } from "../Dismissible";

export type DropdownProps = {
  position: Position;
  renderContents: () => ReactElement;
  renderOpener: (open: () => void) => ReactElement;
  spacing?: number;
  open: boolean;
};

const CONTENT_PADDING = 20;

export const Dropdown: FC<DropdownProps> = ({
  open,
  renderOpener,
  renderContents,
  position,
  spacing,
}) => {
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

    const { x, y } = getOffsetByPosition({
      referenceRect: openerRect,
      targetRect,
      position,
      spacing,
    });

    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const isOverflowing = detectOverflow({
      viewport,
      targetRect: { ...targetRect, x: openerRect.x + x, y: openerRect.y + y },
    });

    if (!isOverflowing) {
      setOffset({ x, y });

      setVisible(true);

      return;
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
      setOffset({ x: flippedX, y: flippedY });

      setVisible(true);
    }
  }, [position, spacing]);

  const handleResize = useCallback(
    async ({ layout: { width, height, x, y } }: LayoutEvent) => {
      const openerRect = await getElementRect(openerRef.current);

      const { x: offsetX, y: offsetY } = getOffsetByPosition({
        referenceRect: openerRect,
        targetRect: {
          x,
          y,
          width,
          height: height + CONTENT_PADDING * 2,
        },
        position,
        spacing: spacing,
      });

      setContentHeight(height);

      setOffset({ x: offsetX, y: offsetY });
    },
    [position, spacing]
  );

  const opener = useMemo(
    () => renderOpener(() => setIsOpen(!isOpen)),
    [renderOpener]
  );

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
            animation={{ opacity: visible ? 1 : 0 }}
            duration={150}
          >
            <Box
              backgroundColor="background"
              position="absolute"
              zIndex={1}
              py={CONTENT_PADDING}
              elevationLevel={4}
              borderRadiusLevel={1}
              transform={{
                translateX: offset.x,
                translateY: offset.y,
              }}
            >
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
                <Box overflowY="hidden">
                  <Box onLayout={handleResize}>{renderContents()}</Box>
                </Box>
              </Transition>
            </Box>
          </Transition>
        </Dismissible>
      )}
    </Box>
  );
};
