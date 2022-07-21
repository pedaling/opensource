import { Box } from '@vibrant-ui/core';
import { withOperationButtonVariation } from './OperatorButtonProps';

export const OperatorButton = withOperationButtonVariation(
  ({ IconComponent, backgroundColor, pressable, iconFill, ...restProps }) => (
    <Box
      as="button"
      p={7}
      borderWidth={0}
      borderRadius={2}
      backgroundColor={backgroundColor}
      pressable={pressable}
      {...restProps}
    >
      <IconComponent size={16} fill={iconFill} />
    </Box>
  )
);
