import { useState } from 'react';
import { Box, useCurrentTheme } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { HStack } from '../HStack';
import { Title } from '../Title';
import { withTopBarVariation } from './TopBarProps';

export const TopBar = withTopBarVariation(
  ({
    as,
    backgroundColor = 'background',
    title,
    titleAs = 'h1',
    titleLevel,
    titleCentered,
    renderLeft,
    renderRight,
  }) => {
    const [leftSideWidth, setLeftSideWidth] = useState<number>();
    const [rightSideWidth, setRightSideWidth] = useState<number>();

    const {
      theme: { contentArea },
    } = useCurrentTheme();

    return (
      <Box
        as={as}
        width="100%"
        height={52}
        px={contentArea.padding}
        backgroundColor={backgroundColor}
        justifyContent="center"
      >
        <HStack mx="auto" width="100%" maxWidth={contentArea.maxWidth} alignVertical="center" spacing={16}>
          {(titleCentered || renderLeft) && (
            <Box flexShrink={0} flexBasis={Math.max(leftSideWidth ?? 0, rightSideWidth ?? 0)} alignItems="start">
              <HStack onLayout={({ width }) => setLeftSideWidth(width)} spacing={16} alignVertical="center">
                {renderLeft?.()}
              </HStack>
            </Box>
          )}
          <Title
            as={titleAs}
            level={titleLevel}
            flex={1}
            textAlign={titleCentered ? 'center' : 'left'}
            lineLimit={1}
            opacity={
              titleCentered && (renderLeft || renderRight) && !isDefined(leftSideWidth) && !isDefined(rightSideWidth)
                ? 0
                : 1
            }
          >
            {title}
          </Title>
          {(titleCentered || renderRight) && (
            <Box flexShrink={0} flexBasis={Math.max(leftSideWidth ?? 0, rightSideWidth ?? 0)} alignItems="end">
              <HStack onLayout={({ width }) => setRightSideWidth(width)} spacing={16} alignVertical="center">
                {renderRight?.()}
              </HStack>
            </Box>
          )}
        </HStack>
      </Box>
    );
  }
);
