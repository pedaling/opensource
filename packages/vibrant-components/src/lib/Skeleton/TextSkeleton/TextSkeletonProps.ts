import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { TypographyKind } from '@vibrant-ui/theme';

export type TextSkeletonProps = {
  typography: ResponsiveValue<TypographyKind>;
  maxWidth?: ResponsiveValue<number>;
  lines?: number;
};

export const withTextSkeletonVariation = withVariation<TextSkeletonProps>('Skeleton')();
