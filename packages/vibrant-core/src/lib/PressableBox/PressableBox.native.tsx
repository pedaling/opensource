import { Pressable } from 'react-native';
import { Box } from '../Box';
import { withPressableBoxVariation } from './PressableBoxProps';

export const PressableBox = withPressableBoxVariation(
  ({ innerRef, onClick, onFocusIn, onFocusOut, disabled, onPressIn, children, onPressOut, ...restProps }) => (
    <Box
      ref={innerRef}
      base={Pressable}
      disabled={disabled}
      onPress={() => onClick?.()}
      onPressIn={() => onPressIn?.()}
      onPressOut={() => onPressOut?.()}
      onFocus={() => onFocusIn?.()}
      onBlur={() => onFocusOut?.()}
      {...restProps}
    >
      {children}
    </Box>
  )
);
