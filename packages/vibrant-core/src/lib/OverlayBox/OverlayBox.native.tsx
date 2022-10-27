import { useCallback, useEffect, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { View } from 'react-native';
import type { Rect } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { PortalBox } from '../PortalBox';
import { useWindowDimensions } from '../useWindowDimensions';
import { withOverlayBoxVariation } from './OverlayBoxProps';

export const OverlayBox = withOverlayBoxVariation(({ open, innerRef, onDismiss, targetRef, children, ...boxProps }) => {
  const [targetRect, setTargetRect] = useState<Rect | null>(null);

  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    if (!open) {
      return;
    }

    getElementRect(targetRef.current).then(rect => setTargetRect(rect));
  }, [open, targetRef, windowDimensions]);

  const handleTargetTouchEnd = useCallback(
    ({ nativeEvent: { pageX, pageY } }: GestureResponderEvent) => {
      if (!targetRect) {
        return;
      }

      const isEventTargetInTargetRect =
        pageX >= targetRect.x &&
        pageX <= targetRect.x + targetRect.width &&
        pageY >= targetRect.y &&
        pageY <= targetRect.y + targetRect.height;

      if (!isEventTargetInTargetRect) {
        return;
      }

      onDismiss?.();
    },
    [onDismiss, targetRect]
  );

  if (!targetRect || !open) {
    return null;
  }

  return (
    <PortalBox width="100%" height="100%">
      <Box base={View} width="100%" height="100%" onTouchEnd={() => onDismiss?.()} />
      <Box
        base={View}
        position="absolute"
        top={targetRect.y}
        left={targetRect.x}
        width={targetRect.width}
        height={targetRect.height}
        onTouchEnd={handleTargetTouchEnd}
      >
        <Box position="relative" width="100%" height="100%">
          <Box position="absolute" ref={innerRef} {...boxProps}>
            {children}
          </Box>
        </Box>
      </Box>
    </PortalBox>
  );
});
