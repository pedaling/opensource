import { useState } from 'react';
import { Box, PressableBox } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { getOpacity } from './getOpacity';
import { withPressableVariation } from './PressableProp';

export const Pressable = withPressableVariation(
  ({
    as = 'button',
    children,
    overlayColor,
    onFocus,
    onBlur,
    onClick,
    interactions,
    disabled = false,
    ...restProps
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    const { overlayOpacity, textOpacity } = getOpacity({
      interactions: interactions ?? [],
      isActivated,
      isFocused,
      isHovered,
      overlayColor,
      disabled,
    });

    return (
      <Transition animation={{ opacity: textOpacity }} duration={200} {...restProps}>
        <PressableBox
          as={as}
          position="relative"
          overflow="hidden"
          cursor={disabled ? 'default' : 'pointer'}
          alignItems="stretch"
          zIndex={0}
          disabled={disabled}
          onClick={onClick}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          onFocusIn={() => {
            setIsFocused(true);

            onFocus?.();
          }}
          onFocusOut={() => {
            setIsFocused(false);

            onBlur?.();
          }}
          onPressIn={() => setIsActivated(true)}
          onPressOut={() => setIsActivated(false)}
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
        </PressableBox>
      </Transition>
    );
  }
);
