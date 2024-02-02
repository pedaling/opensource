import type { CurrentTheme } from '@vibrant-ui/theme';
import { useCurrentTheme } from '../ThemeProvider';

export function injectContext<ReturnType>(
  fn: (_: { theme: CurrentTheme; props: Record<string, any> }) => ReturnType
): (props: any) => ReturnType {
  return (props: Record<string, any>) => {
    const { theme } = useCurrentTheme();

    return fn({ theme, props });
  };
}
