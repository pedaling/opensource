import type { ComponentType, Ref } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { IconProps } from '@vibrant-ui/icons';

type FloatingActionButtonProps = {
  order?: number;
  ref?: Ref<any>;
  position?: 'left' | 'right';
  offset?: number;
  onClick: () => void;
  testId?: string;
  IconComponent: ComponentType<IconProps>;
};

export const withFloatingActionButtonVariation = withVariation<FloatingActionButtonProps>('FloatingActionButton')();
