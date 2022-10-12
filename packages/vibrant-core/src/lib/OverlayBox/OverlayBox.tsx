import { cloneElement, useCallback, useEffect, useMemo, useRef } from 'react';
import type { Rect } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { withOverlayBoxVariation } from './OverlayBoxProps';

export const OverlayBox = withOverlayBoxVariation(
  ({ open, onDismiss, targetRef: _, innerRef, children, ...boxProps }) => {
    const targetRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!open) {
        return;
      }

      let targetRect: Rect | undefined = undefined;

      const onMousedown = async () => {
        if (!targetRef?.current) {
          return;
        }

        targetRect = await getElementRect(targetRef.current);
      };

      const onMouseup = async ({ pageX, pageY }: MouseEvent) => {
        if (!targetRef?.current || !targetRect) {
          return;
        }

        const isEventTargetInTargetRect =
          pageX >= targetRect.x &&
          pageX <= targetRect.x + targetRect.width &&
          pageY >= targetRect.y &&
          pageY <= targetRect.y + targetRect.height;

        if (!isEventTargetInTargetRect) {
          onDismiss?.();
        }

        targetRect = undefined;
      };

      requestAnimationFrame(() => {
        document.addEventListener('mousedown', onMousedown, { passive: false });

        document.addEventListener('mouseup', onMouseup, { passive: false });
      });

      return () => {
        requestAnimationFrame(() => {
          document.removeEventListener('mousedown', onMousedown);

          document.removeEventListener('mouseup', onMouseup);
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
