import { Box, transformResponsiveValue, useCurrentTheme } from '@vibrant-ui/core';
import { VStack } from '../../VStack';
import { SkeletonMotion } from '../SkeletonMotion';
import { withSkeletonTextVariation } from './SkeletonTextProps';

export const SkeletonText = withSkeletonTextVariation(({ lines = 1, typography, maxWidth }) => {
  const {
    theme: { typography: themeTypography },
  } = useCurrentTheme();

  return (
    <VStack width="100%" maxWidth={maxWidth}>
      {Array.from({ length: lines }, (_, index) => (
        <VStack
          key={index}
          width={index === lines - 1 && lines !== 1 ? '40%' : '100%'}
          height={transformResponsiveValue(typography, value => themeTypography[value].lineHeight)}
          alignVertical="center"
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
    </VStack>
  );
});
