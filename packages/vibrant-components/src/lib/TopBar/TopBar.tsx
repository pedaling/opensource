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
    const [leftSideWidth, setLeftSideWidth] = useState<number | undefined>(undefined);
    const [rightSideWidth, setRightSideWidth] = useState<number | undefined>(undefined);
    const sideWidth = !leftSideWidth && !rightSideWidth ? 'auto' : Math.max(leftSideWidth ?? 0, rightSideWidth ?? 0);

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
        <HStack mx="auto" width="100%" maxWidth={contentArea.maxWidth} spacing={16}>
          {(titleCentered || renderLeft) && (
            <Box flexShrink={0} flexBasis={sideWidth} alignItems="start">
              <HStack
                onLayout={({ width }) => setLeftSideWidth(width)}
                height="100%"
                spacing={16}
                alignVertical="center"
              >
                {renderLeft?.()}
              </HStack>
            </Box>
          )}
          <Title
            as={titleAs}
            level={titleLevel}
            flex={1}
            alignSelf="center"
            textAlign={titleCentered ? 'center' : 'left'}
            lineLimit={1}
            visibility={
              titleCentered && (renderLeft || renderRight) && !isDefined(leftSideWidth) && !isDefined(rightSideWidth)
                ? 'hidden'
                : 'visible'
            }
          >
            {title}
          </Title>
          {(titleCentered || renderRight) && (
            <Box flexShrink={0} flexBasis={sideWidth} alignItems="end">
              <HStack
                onLayout={({ width }) => setRightSideWidth(width)}
                height="100%"
                spacing={16}
                alignVertical="center"
              >
                {renderRight?.()}
              </HStack>
            </Box>
          )}
        </HStack>
      </Box>
    );
  }
);
