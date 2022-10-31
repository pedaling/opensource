import type { MouseEventHandler } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { Rect } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { PortalBox } from '../PortalBox';
import { PressableBox } from '../PressableBox';
import { useLockBodyScroll } from '../useLockBodyScroll';
import { useWindowDimensions } from '../useWindowDimensions';
import { withOverlayBoxVariation } from './OverlayBoxProps';

export const OverlayBox = withOverlayBoxVariation(
  ({ open, innerRef, onDismiss, targetRef, children, zIndex, ...boxProps }) => {
    const [targetRect, setTargetRect] = useState<Rect | null>(null);

    useLockBodyScroll(open);

    const { width, height } = useWindowDimensions();

    useEffect(() => {
      if (!open) {
        return;
      }

      getElementRect(targetRef.current).then(rect => {
        setTargetRect(rect);
      });
    }, [open, targetRef, width, height]);

    const handleTargetClick: MouseEventHandler = useCallback(
      event => {
        if (event.target !== event.currentTarget) {
          return;
        }

        onDismiss?.();

        setTargetRect(null);
      },
      [onDismiss]
    );

    if (!targetRect || !open) {
      return null;
    }

    return (
      <PortalBox zIndex={zIndex} top={0} right={0} bottom={0} left={0}>
        <PressableBox position="absolute" width="100%" height="100%" onClick={() => onDismiss?.()} />
        <Box
          as="div"
          top={targetRect.y}
          left={targetRect.x}
          width={targetRect.width}
          height={targetRect.height}
          onClick={handleTargetClick}
        >
          <Box position="absolute" ref={innerRef} {...boxProps}>
            {children}
          </Box>
        </Box>
      </PortalBox>
    );
  }
);
