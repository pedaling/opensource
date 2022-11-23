import { useState } from 'react';
import type { LayoutEvent } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Title } from '../Title';
import { withTopBarVariation } from './TopBarProps';

export const TopBar = withTopBarVariation(
  ({ backgroundColor = 'background', title, titleAs = 'h1', titleLevel, titleCentered, renderLeft, renderRight }) => {
    const [maxSideWidth, setMaxSideWidth] = useState<number>();

    const handleSideLayout = ({ width }: LayoutEvent) => {
      if (width > (maxSideWidth ?? 0)) {
        setMaxSideWidth(width);
      }
    };

    return (
      <Paper width="100%" px={20} height={52} backgroundColor={backgroundColor}>
        <HStack my="auto" alignVertical="center" spacing={16}>
          {(titleCentered || renderLeft) && (
            <HStack onLayout={handleSideLayout} spacing={16} flexShrink={0} flexBasis={maxSideWidth}>
              {renderLeft?.()}
            </HStack>
          )}
          <Title
            as={titleAs}
            level={titleLevel}
            flex={10}
            textAlign={titleCentered ? 'center' : 'left'}
            lineLimit={1}
            opacity={(renderLeft || renderRight) && !isDefined(maxSideWidth) ? 0 : 1}
          >
            {title}
          </Title>
          {(titleCentered || renderRight) && (
            <HStack
              onLayout={handleSideLayout}
              spacing={16}
              flexShrink={0}
              flexBasis={maxSideWidth}
              alignHorizontal="end"
            >
              {renderRight?.()}
            </HStack>
          )}
        </HStack>
      </Paper>
    );
  }
);
