import { Box, transformResponsiveValue, useCurrentTheme } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { VStack } from '../../VStack';
import { withSkeletonTextVariation } from './SkeletonTextProps';

export const SkeletonText = withSkeletonTextVariation(({ lines = 1, typography, ...props }) => {
  const {
    theme: { typography: themeTypography },
  } = useCurrentTheme();

  return (
    <>
      {Array.from({ length: lines }, (_, index) => (
        <VStack
          key={index}
          width="100%"
          height={transformResponsiveValue(typography, value => themeTypography[value].lineHeight)}
          alignVertical="center"
          {...props}
        >
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
            <Box
              backgroundColor="surface1"
              height={transformResponsiveValue(typography, value => themeTypography[value].fontSize)}
              borderRadiusLevel={1}
            />
          </Motion>
        </VStack>
      ))}
    </>
  );
});
