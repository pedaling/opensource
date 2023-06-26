import type { FC } from 'react';
import type { ReactElementChild } from '../../types';
import { AnimationProvider } from '../AnimationProvider';
import { ConfigProvider } from '../ConfigProvider';
import type { ConfigProviderProps } from '../ConfigProvider';
import { PortalRootProvider } from '../PortalRoot';
import { SafeAreaProvider } from '../SafeAreaProvider';
import { StackedPortalProvider } from '../StackedPortalProvider';
import { ThemeProvider } from '../ThemeProvider';
import type { ThemeProviderProps } from '../ThemeProvider';
import { WindowDimensionsProvider } from '../WindowDimensionsProvider';

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
  translations,
  portalRootZIndex = 100,
  portalTopPriorityOrder = [],
  portalBottomPriorityOrder = [],
}) => (
  <ConfigProvider dependencies={dependencies} translations={translations}>
    <SafeAreaProvider>
      <AnimationProvider>
        <ThemeProvider theme={theme ?? {}} root={root}>
          <StackedPortalProvider
            priorityOrder={{
              top: portalTopPriorityOrder,
              bottom: portalBottomPriorityOrder,
            }}
          >
            <PortalRootProvider zIndex={portalRootZIndex}>
              <WindowDimensionsProvider>{children}</WindowDimensionsProvider>
            </PortalRootProvider>
          </StackedPortalProvider>
        </ThemeProvider>
      </AnimationProvider>
    </SafeAreaProvider>
  </ConfigProvider>
);

VibrantProvider.displayName = 'VibrantProvider';
