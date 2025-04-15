import type { FC, ReactElement } from 'react';
import React, { memo, useCallback } from 'react';
import type { BaseColorToken } from '@vibrant-ui/theme';
import { BaseColorOnColorMap, baseColorTokens } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../types';
import { ThemeProvider } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';

type OnColorContainerProps = {
  backgroundColor: ResponsiveValue<string>;
  children: ReactElement;
};

export const OnColorContainer: FC<OnColorContainerProps> = memo(({ backgroundColor, children }) => {
  const { getResponsiveValue } = useResponsiveValue();

  const getTheme = useCallback(() => {
    const responsiveBackgroundColor = getResponsiveValue(backgroundColor) as BaseColorToken;

    if (!baseColorTokens.includes(responsiveBackgroundColor)) {
      return null;
    }

    const onColor = BaseColorOnColorMap[responsiveBackgroundColor];

    return {
      colors: {
        light: { onColor: `$colors.${onColor}` },
        dark: { onColor: `$colors.${onColor}` },
      },
    };
  }, [backgroundColor, getResponsiveValue]);

  const theme = getTheme();

  if (!theme) {
    return children;
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});

OnColorContainer.displayName = 'OnColorContainer';
