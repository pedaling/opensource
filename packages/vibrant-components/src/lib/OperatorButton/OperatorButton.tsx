import { Box } from '@vibrant-ui/core';
import { Pressable } from '../Pressable';
import { withOperationButtonVariation } from './OperatorButtonProps';

export const OperatorButton = withOperationButtonVariation(
  ({ IconComponent, backgroundColor, pressableProps, iconFill, ...restProps }) => (
    <Box
      base={Pressable}
      p={7}
      borderWidth={0}
      borderRadius={2}
      backgroundColor={backgroundColor}
      {...pressableProps}
      {...restProps}
    >
      <IconComponent size={16} fill={iconFill} />
    </Box>
  )
);
