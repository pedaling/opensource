import { cloneElement } from 'react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
import { withFilterChipVariation } from './FilterChipProps';

export const FilterChip = withFilterChipVariation(
  ({
    startIcon,
    endIcon,
    children,
    bodyLevel,
    color,
    spacing,
    iconSize,
    testId,
    lineLimit,
    maxWidth = '100%',
    ...props
  }) => (
    <Pressable
      testId={testId}
      flexGrow={0}
      flexShrink={0}
      maxWidth={maxWidth}
      flexDirection="row"
      alignItems="center"
      alignSelf="flex-start"
      {...props}
    >
      {startIcon && (
        <Box as="span" mr={spacing} ml={2}>
          {cloneElement(startIcon, { size: iconSize, fill: color })}
        </Box>
      )}
      <Body level={bodyLevel} color={color} lineLimit={lineLimit} wordBreak={lineLimit ? 'break-all' : 'normal'}>
        {children}
      </Body>
      {endIcon && (
        <Box as="span" ml={spacing} mr={2}>
          {cloneElement(endIcon, { size: iconSize, fill: color })}
        </Box>
      )}
    </Pressable>
  )
);
