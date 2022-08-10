import type { FC } from 'react';
import type { ReactElementChild } from '../../types';
import { DependencyProvider } from '../DependencyProvider';
import type { DependencyProviderProps } from '../DependencyProvider';
import { GlobalEventProvider } from '../GlobalEventProvider';
import { ThemeProvider } from '../ThemeProvider';
import type { ThemeProviderProps } from '../ThemeProvider';

export type VibrantProviderProps = Partial<DependencyProviderProps & ThemeProviderProps> & {
  children: ReactElementChild;
};

export const VibrantProvider: FC<VibrantProviderProps> = ({ children, theme, root, dependencies }) => (
  <DependencyProvider dependencies={dependencies ?? {}}>
    <ThemeProvider theme={theme ?? {}} root={root}>
      <GlobalEventProvider>{children}</GlobalEventProvider>
    </ThemeProvider>
  </DependencyProvider>
);

VibrantProvider.displayName = 'VibrantProvider';
