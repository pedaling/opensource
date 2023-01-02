import { Box, transformResponsiveValue, useCurrentTheme } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { withSkeletonButtonVariation } from './SkeletonButtonProps';

export const SkeletonButton = withSkeletonButtonVariation(({ typography, py, width }) => {
  const {
    theme: { typography: themeTypography },
  } = useCurrentTheme();

  return (
    <Motion
      animation={{
        opacity: {
          from: 1,
          to: 0.4,
        },
      }}
      loop="reverse"
      duration={2400}
    >
      <Box backgroundColor="surface1" borderRadiusLevel={1} py={py} width={width}>
        <Box height={transformResponsiveValue(typography, value => themeTypography[value].lineHeight)} />
      </Box>
    </Motion>
  );
});
