import type { FC } from 'react';
import type { ReactElementChild } from '../../types';
import { ConfigProvider } from '../ConfigProvider';
import type { ConfigProviderProps } from '../ConfigProvider';
import { PortalRootProvider } from '../PortalRoot';
import { SafeAreaProvider } from '../SafeAreaProvider';
import { StackedPortalProvider } from '../StackedPortalContext';
import { ThemeProvider } from '../ThemeProvider';
import type { ThemeProviderProps } from '../ThemeProvider';

export type VibrantProviderProps = Partial<ConfigProviderProps & ThemeProviderProps> & {
  children: ReactElementChild;
  portalRootZIndex?: number;
  portalTopPriorityOrder?: string[];
  portalBottomPriorityOrder?: string[];
};

export const VibrantProvider: FC<VibrantProviderProps> = ({
  children,
  theme,
  root,
  dependencies,
  portalRootZIndex = 100,
  portalTopPriorityOrder = [],
  portalBottomPriorityOrder = [],
}) => (
  <ConfigProvider dependencies={dependencies ?? {}}>
    <SafeAreaProvider>
      <ThemeProvider theme={theme ?? {}} root={root}>
        <StackedPortalProvider
          priorityOrder={{
            top: portalTopPriorityOrder,
            bottom: portalBottomPriorityOrder,
          }}
        >
          <PortalRootProvider zIndex={portalRootZIndex}>{children}</PortalRootProvider>
        </StackedPortalProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </ConfigProvider>
);

VibrantProvider.displayName = 'VibrantProvider';
