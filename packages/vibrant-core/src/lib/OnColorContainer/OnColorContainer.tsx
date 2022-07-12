import type { FC, ReactElement } from 'react';
import type { OnColorToken } from '@vibrant-ui/theme';
import { ThemeProvider } from '../ThemeProvider';

type OnColorContainerProps = {
  color: OnColorToken;
  children: ReactElement;
};

export const OnColorContainer: FC<OnColorContainerProps> = ({ color, children }) => (
  <ThemeProvider
    theme={{
      colors: {
        light: { onColor: `$colors.${color}` },
        dark: { onColor: `$colors.${color}` },
      },
    }}
  >
    {children}
  </ThemeProvider>
);
