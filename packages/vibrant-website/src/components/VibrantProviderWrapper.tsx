import type { FC, ReactNode } from 'react';
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { ToastProvider, ToastRenderer } from '@vibrant-ui/components';
import { VibrantProvider } from '@vibrant-ui/core';

export const VibrantProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <VibrantProvider theme={{ mode: colorMode }}>
      <ToastProvider>
        <>{children}</>
        <ToastRenderer />
      </ToastProvider>
    </VibrantProvider>
  );
};
