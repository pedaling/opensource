import { useCallback, useEffect, useState } from 'react';
import type { Rect } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { PortalBox } from '../PortalBox';
import { PressableBox } from '../PressableBox';
import { useLockBodyScroll } from '../useLockBodyScroll';
import { withOverlayBoxVariation } from './OverlayBoxProps';

export const OverlayBox = withOverlayBoxVariation(({ open, innerRef, onDismiss, targetRef, children, ...boxProps }) => {
  const [targetRect, setTargetRect] = useState<Rect | null>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) {
      return;
    }

    getElementRect(targetRef.current).then(rect => setTargetRect(rect));
  }, [open, targetRef]);

  const handleTargetTouchEnd = useCallback(() => {
    onDismiss?.();

    setTargetRect(null);
  }, [onDismiss]);

  if (!targetRect || !open) {
    return null;
  }

  return (
    <PortalBox top={0} right={0} bottom={0} left={0}>
      <PressableBox as="div" position="absolute" width="100%" height="100%" onClick={() => onDismiss?.()} />
      <PressableBox
        as="div"
        top={targetRect.y}
        left={targetRect.x}
        width={targetRect.width}
        height={targetRect.height}
        onClick={handleTargetTouchEnd}
      >
        <Box position="absolute" ref={innerRef} {...boxProps}>
          {children}
        </Box>
      </PressableBox>
    </PortalBox>
  );
});
