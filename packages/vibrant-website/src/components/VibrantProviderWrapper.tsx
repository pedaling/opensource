import type { FC, ReactNode } from 'react';
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { VibrantProvider } from '@vibrant-ui/core';

export const VibrantProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <VibrantProvider theme={{ mode: colorMode }}>
      <>{children}</>
    </VibrantProvider>
  );
};
