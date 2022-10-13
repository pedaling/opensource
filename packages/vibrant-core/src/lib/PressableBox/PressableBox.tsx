import type { KeyboardEventHandler } from 'react';
import { Box } from '../Box';
import { withPressableBoxVariation } from './PressableBoxProps';

export const PressableBox = withPressableBoxVariation(
  ({
    innerRef,
    as,
    type,
    cursor = 'pointer',
    onClick,
    onFocusIn,
    onFocusOut,
    disabled,
    onHoverIn,
    onHoverOut,
    onPressIn,
    onPressOut,
    children,
    hitSlop: _hitSlop,
    ...restProps
  }) => (
    <Box
      ref={innerRef}
      as={as}
      cursor={cursor}
      onClick={(event: { stopPropagation: () => void }) => {
        if (disabled) {
          return;
        }

        event.stopPropagation();

        onClick?.();
      }}
      onMouseEnter={() => onHoverIn?.()}
      onMouseLeave={() => onHoverOut?.()}
      onFocus={() => onFocusIn?.()}
      onBlur={() => onFocusOut?.()}
      onMouseDown={() => onPressIn?.()}
      onMouseUp={() => {
        onPressOut?.();

        onFocusOut?.();
      }}
      {...(as === 'button'
        ? {
            type: type ?? 'button',
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
      {children}
    </Box>
  )
);
