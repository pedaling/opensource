import type { FC } from 'react';
import React from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import { palettes } from '@vibrant-ui/theme';

type InjectColorsProps = {
  children: ({ colors }: { colors: Record<string, Record<string, string> | string> }) => ReactElementChild;
};

export const InjectColors: FC<InjectColorsProps> = ({ children }) => <>{children({ colors: palettes })}</>;
