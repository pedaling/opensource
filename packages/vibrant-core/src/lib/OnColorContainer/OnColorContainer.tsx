import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';
import { Global } from '@emotion/react';
import type { OnColorToken } from '@vibrant-ui/theme';
import { Box } from '../Box';
import { useCurrentTheme } from '../ThemeProvider';
import type { ResponsiveValue } from '../types';
import { useBuildStyle } from '../useBuildStyle';

type OnColorContainerProps = {
  color: ResponsiveValue<OnColorToken>;
} & (
  | {
      injectTo: 'root' | 'self';
      children: ReactNode;
    }
  | {
      injectTo?: 'forward';
      children: ReactElement;
    }
);

export const OnColorContainer: FC<OnColorContainerProps> = ({ color, injectTo = 'forward', children }) => {
  const { theme } = useCurrentTheme({ root: injectTo === 'root' });
  const { colors } = theme;

  const responsiveColor = Array.isArray(color) ? color : [color];

  const forwardStyle = useBuildStyle()(
    responsiveColor.map(value => ({
      color: colors[value],
      systemOnColor: colors[value],
    })),
    { theme }
  );

  const rootStyle = useBuildStyle()(
    responsiveColor.map(value => ({
      ':root': {
        '--system-on-color': colors[value],
      },
    })),
    { theme }
  );

  if (injectTo === 'root') {
    return (
      <>
        <Global styles={rootStyle} />
        {children}
      </>
    );
  }

  if (injectTo === 'self') {
    return (
      <Box width="100%" height="100%">
        {children}
      </Box>
    );
  }

  return <Box base={(props: Record<string, any>) => cloneElement(children as ReactElement, props)} {...forwardStyle} />;
};
