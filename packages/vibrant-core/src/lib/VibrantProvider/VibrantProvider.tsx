import type { FC } from 'react';
import type { ReactElementChild } from '../../types';
import { ConfigProvider } from '../ConfigProvider';
import type { ConfigProviderProps } from '../ConfigProvider/ConfigProvider';
import { GlobalEventProvider } from '../GlobalEventProvider';
import { SafeAreaProvider } from '../SafeAreaProvider';
import { ThemeProvider } from '../ThemeProvider';
import type { ThemeProviderProps } from '../ThemeProvider';

export type VibrantProviderProps = Partial<ConfigProviderProps & ThemeProviderProps> & {
  children: ReactElementChild;
};

export const VibrantProvider: FC<VibrantProviderProps> = ({ children, theme, root, dependencies }) => (
  <ConfigProvider dependencies={dependencies ?? {}}>
    <SafeAreaProvider>
      <ThemeProvider theme={theme ?? {}} root={root}>
        <GlobalEventProvider>{children}</GlobalEventProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </ConfigProvider>
);

VibrantProvider.displayName = 'VibrantProvider';
