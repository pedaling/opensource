import { Box, transformResponsiveValue, useCurrentTheme } from '@vibrant-ui/core';
import { withSkeletonButtonVariation } from './SkeletonButtonProps';

export const SkeletonButton = withSkeletonButtonVariation(({ typography, py, width }) => {
  const {
    theme: { typography: themeTypography },
  } = useCurrentTheme();

  return (
    <Box backgroundColor="disable" borderRadiusLevel={1} py={py} width={width}>
      <Box height={transformResponsiveValue(typography, value => themeTypography[value].lineHeight)} />
    </Box>
  );
});
