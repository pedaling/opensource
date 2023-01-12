import { cloneElement } from 'react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { withFilterChipVariation } from './FilterChipProps';

export const FilterChip = withFilterChipVariation(
  ({ startIcon, endIcon, children, bodyLevel, color, spacing, iconSize, ...props }) => (
    <Pressable flexGrow={0} flexShrink={0} borderRadiusLevel={5} {...props}>
      <HStack as="span" my="auto" alignVertical="center">
        {startIcon && (
          <Box as="span" mr={spacing}>
            {cloneElement(startIcon, { size: iconSize, fill: color })}
          </Box>
        )}
        <Body level={bodyLevel} color={color}>
          {children}
        </Body>
        {endIcon && (
          <Box as="span" ml={spacing}>
            {cloneElement(endIcon, { size: iconSize, fill: color })}
          </Box>
        )}
      </HStack>
    </Pressable>
  )
);
