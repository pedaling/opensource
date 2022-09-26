import type { FC } from 'react';
import React from 'react';
import type { FlexboxSystemProps, ReactElementChild } from '@vibrant-ui/core';
import { PressableBox } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';

type ColorItemProps = {
  backgroundColor: ColorToken;
  height?: number;
  children?: ReactElementChild;
} & FlexboxSystemProps;

export const ColorPaletteItem: FC<ColorItemProps> = ({ backgroundColor, children }) => (
  <PressableBox
    flex={1}
    height={80}
    backgroundColor={backgroundColor}
    onClick={() => window.navigator.clipboard.writeText(backgroundColor)}
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </PressableBox>
);
