import type { FC } from 'react';
import type { ReactElementChild } from '../../types';
import { ConfigProvider } from '../ConfigProvider';
import type { ConfigProviderProps } from '../ConfigProvider';
import { NativeBreakpointProvider } from '../NativeBreakpointProvider';
import { PortalRootProvider } from '../PortalRoot';
import { SafeAreaProvider } from '../SafeAreaProvider';
import { StackedPortalProvider } from '../StackedPortalProvider';
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
  translations,
  portalRootZIndex = 100,
  portalTopPriorityOrder = [],
  portalBottomPriorityOrder = [],
}) => (
  <ConfigProvider dependencies={dependencies} translations={translations}>
    <SafeAreaProvider>
      <ThemeProvider theme={theme ?? {}} root={root}>
        <StackedPortalProvider
          priorityOrder={{
            top: portalTopPriorityOrder,
            bottom: portalBottomPriorityOrder,
          }}
        >
          <PortalRootProvider zIndex={portalRootZIndex}>
            <NativeBreakpointProvider>{children}</NativeBreakpointProvider>
          </PortalRootProvider>
        </StackedPortalProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </ConfigProvider>
);

VibrantProvider.displayName = 'VibrantProvider';
