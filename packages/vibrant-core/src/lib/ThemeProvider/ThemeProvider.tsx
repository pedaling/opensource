import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { CurrentTheme, Theme } from '@vibrant-ui/theme';
import { baseTheme } from '@vibrant-ui/theme';
import type { DeepPartial } from '@vibrant-ui/utils';
import type { ReactElementChild } from '../../types';

export type ThemeProviderProps = {
  theme: DeepPartial<Theme>;
  root?: boolean;
  children: ReactElementChild;
};

type ThemeContextValue = {
  rootTheme: Theme;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextValue>({
  rootTheme: baseTheme,
  theme: baseTheme,
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, root = false, children }) => {
  const { rootTheme, theme: parentTheme } = useContext(ThemeContext);

  const mergedTheme = useMemo(
    () =>
      ({
        ...parentTheme,
        ...theme,
        colors: {
          light: {
            ...parentTheme.colors.light,
            ...(theme.colors?.light ?? {}),
          },
          dark: { ...parentTheme.colors.dark, ...(theme.colors?.dark ?? {}) },
        },
        elevation: {
          light: {
            ...parentTheme.elevation.light,
            ...(theme.elevation?.light ?? {}),
          },
          dark: { ...parentTheme.elevation.dark, ...(theme.elevation?.dark ?? {}) },
        },
        gradient: {
          light: {
            ...parentTheme.gradient.light,
            ...(theme.gradient?.light ?? {}),
          },
          dark: { ...parentTheme.gradient.dark, ...(theme.gradient?.dark ?? {}) },
        },
        opacity: {
          light: {
            ...parentTheme.opacity.light,
            ...(theme.opacity?.light ?? {}),
          },
          dark: { ...parentTheme.opacity.dark, ...(theme.opacity?.dark ?? {}) },
        },
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

ThemeProvider.displayName = 'ThemeProvider';

export const useCurrentTheme = ({ root } = { root: false }): { theme: CurrentTheme } => {
  const { rootTheme, theme } = useContext(ThemeContext);

  const currentTheme = root ? rootTheme : theme;

  const currentThemeValues = {
    ...currentTheme,
    colors: currentTheme.colors[currentTheme.mode],
    elevation: currentTheme.elevation[currentTheme.mode],
    gradient: currentTheme.gradient[currentTheme.mode],
    opacity: currentTheme.opacity[currentTheme.mode],
  };

  return {
    theme: currentThemeValues,
  };
};
