import type { TextChildren } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type BreadCrumbProps = {
  children: TextChildren;
  onClick?: () => void;
  testId?: string;
} & (
  | {
      href?: never;
      isExternal?: never;
    }
  | {
      href?: string;
      isExternal?: boolean;
    }
);

export const withBreadCrumbVariation = withVariation<BreadCrumbProps>('BreadCrumb')();
