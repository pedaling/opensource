import type { ComponentType } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { IconProps } from '@vibrant-ui/icons';

type FloatingActionButtonProps = {
  position?: 'left' | 'right';
  offset?: number;
  IconComponent: ComponentType<IconProps>;
};

export const withFloatingActionButtonVariation = withVariation<FloatingActionButtonProps>('FloatingActionButton')();
