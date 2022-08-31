import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
import { withSelectOptionItemVariation } from './SelectOptionItemProps';

export const SelectOptionItem = withSelectOptionItemVariation(({ innerRef, active, children, ...restProps }) => (
  <Pressable
    ref={innerRef}
    as="li"
    p={16}
    color="onView1"
    width="100%"
    cursor="pointer"
    overlayColor="onView1"
    interactions={['hover', 'active']}
    flexShrink={0}
    {...restProps}
  >
    <>
      {active && (
        <Box
          position="absolute"
          zIndex={-1}
          left={0}
          right={0}
          top={0}
          bottom={0}
          backgroundColor="onView1"
          opacity="overlay.active"
        />
      )}
      <Body level={2}>{children}</Body>
    </>
  </Pressable>
));
