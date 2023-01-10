import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { withFilterChipVariation } from './FilterChipProps';

export const FilterChip = withFilterChipVariation(
  ({ StartIconComponent, EndIconComponent, children, bodyLevel, iconSize, color, spacing, ...props }) => (
    <Pressable flexGrow={0} flexShrink={0} alignItems="center" borderRadiusLevel={5} {...props}>
      <HStack as="span" alignVertical="center">
        {StartIconComponent && (
          <Box as="span" mr={spacing}>
            <StartIconComponent size={iconSize} fill={color} />
          </Box>
        )}
        <Body level={bodyLevel} color={color}>
          {children}
        </Body>
        {EndIconComponent && (
          <Box as="span" ml={spacing}>
            <EndIconComponent size={iconSize} fill={color} />
          </Box>
        )}
      </HStack>
    </Pressable>
  )
);
