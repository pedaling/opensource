import type { KeyboardEventHandler } from 'react';
import { useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { getOpacity } from './getOpacity';
import { withPressableVariation } from './PressableProp';

export const Pressable = withPressableVariation(
  ({ as = 'button', children, overlayColor, onClick, interactions, disabled = false, ...restProps }) => {
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
<<<<<<< HEAD
      <Transition animation={{ opacity: textOpacity }} duration={200} {...restProps}>
        <Box
=======
      <Transition style={{ opacity: textOpacity }} duration={200}>
        <Box
          ref={innerRef}
>>>>>>> 4c6d00d (fix: add textOpacity)
          as={as}
          position="relative"
          overflowX="hidden"
          overflowY="hidden"
          cursor={disabled ? 'default' : 'pointer'}
          zIndex={0}
          onClick={() => !disabled && onClick?.()}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseDown={() => setIsActivated(true)}
          onMouseUp={() => setIsActivated(false)}
          {...(as === 'button'
            ? {
                disabled,
                backgroundColor: 'inherit',
                borderWidth: 0,
                p: 0,
              }
            : {
                tabIndex: disabled ? undefined : 0,
                onKeyPress: (event =>
                  !disabled && event.key === 'Enter' ? onClick?.() : null) as KeyboardEventHandler,
              })}
<<<<<<< HEAD
        >
          {overlayColor && (
            <Transition animation={{ opacity: overlayOpacity }} duration={200}>
=======
          {...restProps}
        >
          {overlayColor && (
            <Transition style={{ opacity: overlayOpacity }} duration={200}>
>>>>>>> 4c6d00d (fix: add textOpacity)
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
