import type { ComponentType, Ref } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { IconProps } from '@vibrant-ui/icons';

type FloatingActionButtonProps = {
  ref?: Ref<any>;
  position?: 'left' | 'right';
  offset?: number;
  onClick: () => void;
  IconComponent: ComponentType<IconProps>;
};

export const withFloatingActionButtonVariation = withVariation<FloatingActionButtonProps>('FloatingActionButton')();
