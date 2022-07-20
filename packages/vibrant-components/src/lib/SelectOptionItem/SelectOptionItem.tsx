import { Box } from '@vibrant-ui/core';
import { withSelectOptionItemVariation } from './SelectOptionItemProps';

export const SelectOptionItem = withSelectOptionItemVariation(({ onClick, children, ...restProps }) => (
  <Box
    as="li"
    p={16}
    color="onView1"
    width="100%"
    typography="body2"
    cursor="pointer"
    pressable={{
      overlayColor: 'onView1',
      interactions: ['hover', 'active'],
    }}
    onMouseDown={onClick}
    {...restProps}
  >
    {children}
  </Box>
));
