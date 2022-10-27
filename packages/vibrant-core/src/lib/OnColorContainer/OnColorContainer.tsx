import type { FC, ReactElement } from 'react';
import type { BaseColorToken } from '@vibrant-ui/theme';
import { BaseColorOnColorMap, baseColorTokens } from '@vibrant-ui/theme';
import { isDefined } from '@vibrant-ui/utils';
import type { ResponsiveValue } from '../../types';
import { ThemeProvider } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';

type OnColorContainerProps = {
  backgroundColor?: ResponsiveValue<string>;
  children: ReactElement;
};

export const OnColorContainer: FC<OnColorContainerProps> = ({ backgroundColor, children }) => {
  const { getResponsiveValue } = useResponsiveValue({ disabled: !isDefined(backgroundColor) });

  const responsiveBackgroundColor = getResponsiveValue(backgroundColor) as BaseColorToken;

  if (!backgroundColor || !baseColorTokens.includes(responsiveBackgroundColor)) {
    return children;
  }

  const onColor = baseColorTokens.includes(responsiveBackgroundColor)
    ? BaseColorOnColorMap[responsiveBackgroundColor]
    : undefined;

  return (
    <ThemeProvider
      theme={{
        colors: {
          light: { onColor: `$colors.${onColor}` },
          dark: { onColor: `$colors.${onColor}` },
        },
      }}
    >
      {children}
    </ThemeProvider>
  );
};

OnColorContainer.displayName = 'OnColorContainer';
