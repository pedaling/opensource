import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
import { withSelectOptionItemVariation } from './SelectOptionItemProps';

export const SelectOptionItem = withSelectOptionItemVariation(({ onClick, children, ...restProps }) => (
  <Box
    as="li"
    base={Pressable}
    p={16}
    color="onView1"
    width="100%"
    cursor="pointer"
    overlayColor="onView1"
    interactions={['hover', 'active']}
    onClick={onClick}
    flexShrink={0}
    {...restProps}
  >
    <Body level={2}>{children}</Body>
  </Box>
));
