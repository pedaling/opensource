import type { CurrentTheme } from '@vibrant-ui/theme';
import { useCurrentTheme } from '../ThemeProvider';

export function injectTheme<ReturnType>(fn: (theme: CurrentTheme) => ReturnType): () => ReturnType {
  return () => {
    const { theme } = useCurrentTheme();

    return fn(theme);
  };
}
