import { Box, calculateResponsiveValues, useCurrentTheme } from '@vibrant-ui/core';
import { convertRemToPixels } from '@vibrant-ui/utils';
import { VStack } from '../../VStack';
import { SkeletonMotion } from '../SkeletonMotion';
import { withSkeletonTextVariation } from './SkeletonTextProps';

export const SkeletonText = withSkeletonTextVariation(({ lines = 1, typography, maxWidth }) => {
  const {
    theme: { typography: themeTypography },
  } = useCurrentTheme();

  const { fontSize, lineHeight } = calculateResponsiveValues({ typography }, value => ({
    fontSize: convertRemToPixels(themeTypography[value.typography].fontSize),
    lineHeight: convertRemToPixels(themeTypography[value.typography].lineHeight),
  }));

  return (
    <VStack width="100%" maxWidth={maxWidth}>
      {Array.from({ length: lines }, (_, index) => (
        <VStack
          key={index}
          width={index === lines - 1 && lines !== 1 ? '40%' : '100%'}
          height={lineHeight}
          alignVertical="center"
        >
          <SkeletonMotion>
            <Box backgroundColor="disable" height={fontSize} borderRadiusLevel={1} />
          </SkeletonMotion>
        </VStack>
      ))}
    </VStack>
  );
});
