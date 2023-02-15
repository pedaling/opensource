import { useState } from 'react';
import { Box, PressableBox } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { getOpacity } from './getOpacity';
import { withPressableVariation } from './PressableProp';

export const Pressable = withPressableVariation(
  ({
    innerRef,
    as = 'button',
    buttonType,
    children,
    overlayColor,
    onFocus,
    onBlur,
    onClick,
    interactions,
    disabled = false,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    alignItems,
    justifyContent,
    p,
    pl,
    pr,
    pt,
    pb,
    px,
    py,
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
      <PressableBox
        ref={innerRef}
        position="relative"
        overflow="hidden"
        cursor={disabled ? 'default' : 'pointer'}
        alignItems="stretch"
        zIndex={0}
        disabled={disabled}
        width={width}
        height={height}
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
        minWidth={minWidth}
        maxWidth={maxWidth}
        minHeight={minHeight}
        maxHeight={maxHeight}
        {...(as === 'button' ? { as, buttonType } : { as })}
        {...restProps}
      >
        {overlayColor && (
          <Transition animation={{ opacity: overlayOpacity }} duration={200}>
            <Box
              as="span"
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
        <Transition animation={{ opacity: textOpacity }} duration={200}>
          <Box
            as="span"
            width={width ?? minWidth ?? maxWidth ? '100%' : 'auto'}
            height={height ?? minHeight ?? maxHeight ? '100%' : 'auto'}
            alignItems={alignItems}
            justifyContent={justifyContent}
            p={p}
            px={px}
            py={py}
            pt={pt}
            pr={pr}
            pb={pb}
            pl={pl}
          >
            {children}
          </Box>
        </Transition>
      </PressableBox>
    );
  }
);
