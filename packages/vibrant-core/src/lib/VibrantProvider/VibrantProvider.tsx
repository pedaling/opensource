import type { FC } from 'react';
import { DependencyProvider } from '../DependencyProvider';
import type { DependencyProviderProps } from '../DependencyProvider';
import { ThemeProvider } from '../ThemeProvider';
import type { ThemeProviderProps } from '../ThemeProvider';
import type { ReactElementChild } from '../types';

export type VibrantProviderProps = Partial<DependencyProviderProps & ThemeProviderProps> & {
  children: ReactElementChild;
};

export const VibrantProvider: FC<VibrantProviderProps> = ({ children, theme, root, dependencies }) => (
  <DependencyProvider dependencies={dependencies ?? {}}>
    <ThemeProvider theme={theme ?? {}} root={root}>
      {children}
    </ThemeProvider>
  </DependencyProvider>
);
