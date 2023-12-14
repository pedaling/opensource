import { Box, transformResponsiveValue, useCurrentTheme } from '@vibrant-ui/core';
import { convertRemToPixels } from '@vibrant-ui/utils';
import { withSkeletonButtonVariation } from './SkeletonButtonProps';

export const SkeletonButton = withSkeletonButtonVariation(({ typography, py, width }) => {
  const {
    theme: { typography: themeTypography },
  } = useCurrentTheme();

  return (
    <Box backgroundColor="disable" rounded="sm" py={py} width={width}>
      <Box
        height={transformResponsiveValue(typography, value => convertRemToPixels(themeTypography[value].lineHeight))}
      />
    </Box>
  );
});
