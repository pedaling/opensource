import { useState } from 'react';
import { Pressable as NativePressable } from 'react-native';
import { Box } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { getOpacity } from './getOpacity';
import { withPressableVariation } from './PressableProp';

export const Pressable = withPressableVariation(
  ({ innerRef, overlayColor, onClick, interactions, disabled = false, children, ...restProps }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isActivated, setIsActivated] = useState(false);
    const { textOpacity, overlayOpacity } = getOpacity({
      disabled,
      interactions: interactions ?? [],
      isActivated,
      isFocused,
      isHovered: false,
      overlayColor,
    });

    return (
      <Transition animation={{ opacity: textOpacity }} duration={200}>
        <Box
          ref={innerRef}
          base={NativePressable}
          position="relative"
          overflowX="hidden"
          overflowY="hidden"
          disabled={disabled}
          onPress={() => onClick?.()}
          onPressIn={() => setIsActivated(true)}
          onPressOut={() => setIsActivated(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...restProps}
        >
          {overlayColor && (
            <Transition animation={{ opacity: overlayOpacity }} duration={200}>
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
        </Box>
      </Transition>
    );
  }
);
