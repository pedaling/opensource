import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { TypographyKind } from '@vibrant-ui/theme';

export type SkeletonTextProps = {
  typography: ResponsiveValue<TypographyKind>;
  maxWidth?: ResponsiveValue<number>;
  lines?: number;
};

export const withSkeletonTextVariation = withVariation<SkeletonTextProps>('SkeletonText')();
