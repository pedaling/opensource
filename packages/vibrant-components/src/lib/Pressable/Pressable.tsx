import type { KeyboardEventHandler } from 'react';
import { useMemo, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { withPressableVariation } from './PressableProp';

export const Pressable = withPressableVariation(
  ({ innerRef, as = 'button', children, overlayColor, onClick, interactions, disabled = false, ...restProps }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    const currentOpacity = useMemo(() => {
      if (disabled) {
        return 0;
      }

      if (isActivated && interactions?.includes('active')) {
        return 'overlay.active';
      }

      if (isFocused && interactions?.includes('focus')) {
        return 'overlay.focus';
      }

      if (isHovered && overlayColor && interactions?.includes('hover')) {
        return 'overlay.hover';
      }

      return 0;
    }, [disabled, interactions, isActivated, isFocused, isHovered, overlayColor]);

    return (
      <Box
        ref={innerRef}
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
              onKeyPress: (event => (!disabled && event.key === 'Enter' ? onClick?.() : null)) as KeyboardEventHandler,
            })}
        {...restProps}
      >
        {overlayColor && (
          <Transition style={{ opacity: currentOpacity }} duration={200}>
            <Box position="absolute" zIndex={-1} left={0} right={0} top={0} bottom={0} backgroundColor={overlayColor} />
          </Transition>
        )}
        {children}
      </Box>
    );
  }
);
