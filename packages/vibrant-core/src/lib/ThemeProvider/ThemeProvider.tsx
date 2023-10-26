import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { CurrentTheme, Theme, ThemeMode } from '@vibrant-ui/theme';
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
  currentTheme: CurrentTheme;
  rootCurrentTheme: CurrentTheme;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextValue>({
  rootTheme: baseTheme,
  currentTheme: {
    ...baseTheme,
    colors: baseTheme.colors[baseTheme.mode],
    elevation: baseTheme.elevation[baseTheme.mode],
    gradient: baseTheme.gradient[baseTheme.mode],
    opacity: baseTheme.opacity[baseTheme.mode],
  },
  rootCurrentTheme: {
    ...baseTheme,
    colors: baseTheme.colors[baseTheme.mode],
    elevation: baseTheme.elevation[baseTheme.mode],
    gradient: baseTheme.gradient[baseTheme.mode],
    opacity: baseTheme.opacity[baseTheme.mode],
  },
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(parentTheme), JSON.stringify(theme)]
  );

  const currentTheme = useMemo(
    () => ({
      ...mergedTheme,
      colors: mergedTheme.colors[mergedTheme.mode],
      elevation: mergedTheme.elevation[mergedTheme.mode],
      gradient: mergedTheme.gradient[mergedTheme.mode],
      opacity: mergedTheme.opacity[mergedTheme.mode],
    }),
    [mergedTheme]
  );

  const rootCurrentTheme = useMemo(
    () => ({
      ...rootTheme,
      colors: rootTheme.colors[rootTheme.mode],
      elevation: rootTheme.elevation[rootTheme.mode],
      gradient: rootTheme.gradient[rootTheme.mode],
      opacity: rootTheme.opacity[rootTheme.mode],
    }),
    [rootTheme]
  );

  const contextValue: ThemeContextValue = useMemo(
    () => ({
      rootTheme: root ? mergedTheme : rootTheme,
      theme: mergedTheme,
      currentTheme,
      rootCurrentTheme,
    }),
    [currentTheme, mergedTheme, root, rootCurrentTheme, rootTheme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.displayName = 'ThemeProvider';

export const useCurrentTheme = ({ root } = { root: false }): { theme: CurrentTheme } => {
  const { currentTheme, rootCurrentTheme } = useContext(ThemeContext);

  return {
    theme: root ? rootCurrentTheme : currentTheme,
  };
};

export const useCurrentThemeMode = ({ root } = { root: false }): { mode: ThemeMode } => {
  const { rootTheme, theme } = useContext(ThemeContext);
  const currentThemeMode = root ? rootTheme.mode : theme.mode;

  return { mode: currentThemeMode };
};
