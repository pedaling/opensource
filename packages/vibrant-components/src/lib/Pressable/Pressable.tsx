import { useState } from 'react';
import type { ComponentWithRef, LinkProps, PressableBoxProps, ReactElementChild } from '@vibrant-ui/core';
import { Box, Link, PressableBox } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { isDefined } from '@vibrant-ui/utils';
import { getOpacity } from './getOpacity';
import { withPressableVariation } from './PressableProp';

export const Pressable = withPressableVariation(
  ({
    innerRef,
    as = 'button',
    buttonType,
    testId = 'pressable',
    href,
    children,
    overlayColor,
    onFocus,
    onBlur,
    onClick,
    interactions,
    disabled = false,
    width,
    height,
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

    const Component = (isDefined(href) ? Link : PressableBox) as ComponentWithRef<LinkProps | PressableBoxProps>;

    return (
      <Transition ref={innerRef} animation={{ opacity: textOpacity }} duration={200}>
        <Component
          data-testid={testId}
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
          {...(isDefined(href) ? { href } : { as, buttonType })}
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
          {children as ReactElementChild}
        </Component>
      </Transition>
    );
  }
);
