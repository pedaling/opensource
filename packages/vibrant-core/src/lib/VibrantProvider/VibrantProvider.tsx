import type { FC } from 'react';
import type { ReactElementChild } from '../../types';
import { ConfigProvider } from '../ConfigProvider';
import type { ConfigProviderProps } from '../ConfigProvider';
import { PortalRoot } from '../PortalRoot';
import { SafeAreaProvider } from '../SafeAreaProvider';
import { ThemeProvider } from '../ThemeProvider';
import type { ThemeProviderProps } from '../ThemeProvider';

export type VibrantProviderProps = Partial<ConfigProviderProps & ThemeProviderProps> & {
  children: ReactElementChild;
  portalRootZIndex?: number;
};

export const VibrantProvider: FC<VibrantProviderProps> = ({
  children,
  theme,
  root,
  dependencies,
  portalRootZIndex = 100,
}) => (
  <ConfigProvider dependencies={dependencies ?? {}}>
    <SafeAreaProvider>
      <ThemeProvider theme={theme ?? {}} root={root}>
        <PortalRoot zIndex={portalRootZIndex}>{children}</PortalRoot>
      </ThemeProvider>
    </SafeAreaProvider>
  </ConfigProvider>
);

VibrantProvider.displayName = 'VibrantProvider';
