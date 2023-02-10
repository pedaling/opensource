import type { FC } from 'react';
import React from 'react';
import { Body, Paper, Space, VStack } from '@vibrant-ui/components';
import { useCurrentTheme } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';

type ColorItemProps = {
  backgroundColor: ColorToken;
  textColor?: ColorToken;
  colorToken: string;
};

export const ColorTokenItem: FC<ColorItemProps> = ({ backgroundColor, textColor, colorToken }) => {
  const {
    theme: { colors },
  } = useCurrentTheme();

  const borderColor =
    colors.background === colors[backgroundColor] || backgroundColor === 'transparent' ? 'outline1' : 'transparent';

  return (
    <Paper
      flexGrow={1}
      maxWidth={['50%', '50%', '100%']}
      minWidth={['50%']}
      minHeight={90}
      backgroundColor={backgroundColor as any}
      borderWidth={1}
      borderRadiusLevel={1}
      borderStyle="solid"
      borderColor={borderColor}
      p={12}
    >
      <VStack alignVertical="center">
        <Body level={[3, 3, 2]} color={textColor as any} weight="medium">
          {colorToken}
        </Body>
        <Space height={4} />
        <Body level={[3, 3, 2]} color={textColor as any} weight="medium">
          {colors[backgroundColor]}
        </Body>
      </VStack>
    </Paper>
  );
};
