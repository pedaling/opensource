import { useCallback, useState } from 'react';
import { Pressable as NativePressable } from 'react-native';
import { Box } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { withPressableVariation } from './PressableProp';

export const Pressable = withPressableVariation(
  ({ innerRef, overlayColor, onClick, interactions, disabled, children, ...restProps }) => {
    const [isFocused, setIsFocused] = useState(false);

    const getCurrentOpacity = useCallback(
      (pressed: boolean) => {
        if (disabled) {
          return 0;
        }

        if (pressed && interactions?.includes('active')) {
          return 'overlay.active';
        }

        if (isFocused && interactions?.includes('focus')) {
          return 'overlay.focus';
        }

        return 0;
      },
      [disabled, interactions, isFocused]
    );

    return (
      <Box
        ref={innerRef}
        base={NativePressable}
        position="relative"
        overflowX="hidden"
        overflowY="hidden"
        disabled={disabled}
        onPress={() => onClick?.()}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...restProps}
      >
        {({ pressed }) => (
          <>
            {overlayColor && (
              <Transition style={{ opacity: getCurrentOpacity(pressed) }}>
                <Box
                  position="absolute"
                  zIndex={-1}
                  left={0}
                  right={0}
                  top={0}
                  bottom={0}
                  backgroundColor={overlayColor}
                />
              </Transition>
            )}
            {children}
          </>
        )}
      </Box>
    );
  }
);
