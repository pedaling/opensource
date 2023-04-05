import type { ComponentType, ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { IconProps } from '@vibrant-ui/icons';
import type { BreadCrumbProps } from '../BreadCrumb';

export type BreadCrumbsProps = {
  children: ReactElement<BreadCrumbProps> | ReactElement<BreadCrumbProps>[];
  Separator: ComponentType<IconProps>;
};

export const withBreadCrumbsVariation = withVariation<BreadCrumbsProps>('BreadCrumbs')();
