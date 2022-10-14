import { cloneElement, useCallback, useEffect, useMemo, useRef } from 'react';
import type { Rect } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { withOverlayBoxVariation } from './OverlayBoxProps';

export const OverlayBox = withOverlayBoxVariation(
  ({ open, onDismiss, targetRef: _, innerRef, children, ...boxProps }) => {
    const targetRef = useRef<HTMLElement | null>(null);
    const targetRectRef = useRef<Rect | null>(null);

    useEffect(() => {
      if (!open) {
        return;
      }

      const onPressDown = async () => {
        if (!targetRef?.current) {
          return;
        }

        targetRectRef.current = await getElementRect(targetRef.current);
      };

      const onPressUp = async (event: MouseEvent | TouchEvent) => {
        const { pageX, pageY } = event instanceof MouseEvent ? event : event.changedTouches[0];

        if (!targetRef?.current || !targetRectRef.current) {
          return;
        }

        const isEventTargetInTargetRect =
          pageX >= targetRectRef.current.x &&
          pageX <= targetRectRef.current.x + targetRectRef.current.width &&
          pageY >= targetRectRef.current.y &&
          pageY <= targetRectRef.current.y + targetRectRef.current.height;

        if (!isEventTargetInTargetRect) {
          onDismiss?.();
        }

        targetRectRef.current = null;
      };

      requestAnimationFrame(() => {
        document.addEventListener('touchstart', onPressDown, { passive: false });

        document.addEventListener('mousedown', onPressDown, { passive: false });

        document.addEventListener('mouseup', onPressUp, { passive: false });

        document.addEventListener('touchend', onPressUp, { passive: false });
      });

      return () => {
        requestAnimationFrame(() => {
          document.removeEventListener('touchstart', onPressDown);

          document.removeEventListener('mousedown', onPressDown);

          document.removeEventListener('mouseup', onPressUp);

          document.removeEventListener('touchend', onPressUp);
        });
      };
    }, [onDismiss, open]);

    const forwardTargetRef = useCallback(
      (node: HTMLElement | null) => {
        if (children.ref) {
          if (typeof children.ref === 'function') {
            children.ref(node);
          } else {
            children.ref.current = node;
          }
        }

        targetRef.current = node;

        if (innerRef) {
          if (typeof innerRef === 'function') {
            innerRef(node);
          } else {
            innerRef.current = node;
          }
        }
      },
      [children, innerRef]
    );

    const clonedChildren = useMemo(
      () => cloneElement(children, { ref: forwardTargetRef }),
      [children, forwardTargetRef]
    );

    if (!open) {
      return null;
    }

    return (
      <Box ref={forwardTargetRef} zIndex={1} position="absolute" {...boxProps}>
        {clonedChildren}
      </Box>
    );
  }
);
