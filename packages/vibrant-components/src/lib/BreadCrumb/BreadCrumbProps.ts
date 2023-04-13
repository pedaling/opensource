import type { TextChildren } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type BreadCrumbProps = {
  children: TextChildren;
  onClick?: () => void;
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
