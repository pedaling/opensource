import type { FC, ReactElement } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { DeepPartial } from '@class101/design-system-utils';
import type { Theme } from '../types';

export type ThemeProviderProps = {
  theme: DeepPartial<Theme>;
  root?: boolean;
  children: ReactElement;
};

type ThemeContextValue = {
  rootTheme: Theme;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextValue>({
  rootTheme: {
    breakpoints: [],
    space: {},
    colors: {},
    opacity: {},
  },
  theme: {
    breakpoints: [],
    space: {},
    colors: {},
    opacity: {},
  },
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, root = false, children }) => {
  const { rootTheme, theme: parentTheme } = useContext(ThemeContext);

  const mergedTheme = useMemo(
    () =>
      ({
        ...parentTheme,
        ...theme,
        colors: { ...parentTheme.colors, ...theme.colors },
      } as Theme),
    [parentTheme, theme]
  );

  const contextValue: ThemeContextValue = useMemo(
    () => ({
      rootTheme: root ? mergedTheme : rootTheme,
      theme: mergedTheme,
    }),
    [mergedTheme, root, rootTheme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = ({ root } = { root: false }): { theme: Theme } => {
  const { rootTheme, theme } = useContext(ThemeContext);

  return {
    theme: root ? rootTheme : theme,
  };
};
