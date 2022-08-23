import type { CurrentTheme } from '@vibrant-ui/theme';
import { useCurrentTheme } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';

export function injectContext<ReturnType>(
  fn: (_: { theme: CurrentTheme; breakpointIndex: number }) => ReturnType
): () => ReturnType {
  return () => {
    const { theme } = useCurrentTheme();
    const { breakpointIndex } = useResponsiveValue();

    return fn({ theme, breakpointIndex });
  };
}
