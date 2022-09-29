import type { FC } from 'react';
import React from 'react';
import { Space } from '@vibrant-ui/components';
import { Box, Text, useCurrentTheme } from '@vibrant-ui/core';
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
    <Box
      flex={1}
      height={100}
      backgroundColor={backgroundColor}
      borderWidth={1}
      borderStyle="solid"
      borderColor={borderColor}
      p={16}
    >
      <Text color={textColor as any} fontWeight="medium">
        {colorToken}
      </Text>
      <Space flex={1} />
      <Text color={textColor as any} fontWeight="medium">
        {colors[backgroundColor]}
      </Text>
    </Box>
  );
};
