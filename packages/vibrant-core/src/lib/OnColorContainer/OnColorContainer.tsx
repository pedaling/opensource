import type { FC, ReactElement } from 'react';
import { memo } from 'react';
import type { BaseColorToken } from '@vibrant-ui/theme';
import { BaseColorOnColorMap, baseColorTokens } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../types';
import { ThemeProvider } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';

type OnColorContainerProps = {
  backgroundColor: ResponsiveValue<string>;
  children: ReactElement;
};

const baseColorTokensSet = new Set(baseColorTokens);
const themeCache = new Map<BaseColorToken, object | null>();

const getTheme = (backgroundColor: BaseColorToken) => {
  if (themeCache.has(backgroundColor)) {
    return themeCache.get(backgroundColor);
  }

  if (!baseColorTokensSet.has(backgroundColor)) {
    themeCache.set(backgroundColor, null);

    return null;
  }

  const onColor = BaseColorOnColorMap[backgroundColor];

  const theme = {
    colors: {
      light: { onColor: `$colors.${onColor}` },
      dark: { onColor: `$colors.${onColor}` },
    },
  };

  themeCache.set(backgroundColor, theme);

  return theme;
};

export const OnColorContainer: FC<OnColorContainerProps> = memo(({ backgroundColor, children }) => {
  const { getResponsiveValue } = useResponsiveValue();
  const responsiveBackgroundColor = getResponsiveValue(backgroundColor) as BaseColorToken;

  const theme = getTheme(responsiveBackgroundColor);

  if (!theme) {
    return children;
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});

OnColorContainer.displayName = 'OnColorContainer';
