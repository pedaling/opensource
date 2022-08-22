import { Pressable } from 'react-native';
import { Box } from '../Box';
import { withPressableBoxVariation } from './PressableBoxProps';

export const PressableBox = withPressableBoxVariation(
  ({ innerRef, onClick, onFocusIn, onFocusOut, disabled, onActive, children, onInactive, ...restProps }) => (
    <Box
      ref={innerRef}
      base={Pressable}
      onPress={() => onClick?.()}
      onPressIn={() => onActive?.()}
      onPressOut={() => onInactive?.()}
      onFocus={() => onFocusIn?.()}
      onBlur={() => onFocusOut?.()}
      {...restProps}
    >
      {children}
    </Box>
  )
);
