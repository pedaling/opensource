import { Box, transformResponsiveValue, useCurrentTheme } from '@vibrant-ui/core';
import { VStack } from '../../VStack';
import { SkeletonMotion } from '../SkeletonMotion';
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
          <SkeletonMotion>
            <Box
              backgroundColor="surface1"
              height={transformResponsiveValue(typography, value => themeTypography[value].fontSize)}
              borderRadiusLevel={1}
            />
          </SkeletonMotion>
        </VStack>
      ))}
    </>
  );
});
