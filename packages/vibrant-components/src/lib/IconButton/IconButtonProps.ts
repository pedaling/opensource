import type { Ref } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import type { ColorToken } from '@vibrant-ui/theme';
import type { PressableProps } from '../Pressable';

type IconButtonProps = {
  ref?: Ref<any>;
  size: ResponsiveValue<'lg' | 'md' | 'sm'>;
  color?: ColorToken;
  type?: PressableProps['buttonType'];
  IconComponent: IconComponent<IconProps, 'Fill' | 'Regular' | 'Thin'>;
  disabled?: boolean;
  onClick?: PressableProps['onClick'];
  ariaLabel?: string;
  testId?: string;
};

export const withIconButtonVariation = withVariation<IconButtonProps>('IconButton')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
    ],
    variants: {
      sm: {
        iconSize: 16,
        hitSlop: 8,
      },
      md: {
        iconSize: 24,
        hitSlop: 8,
      },
      lg: {
        iconSize: 40,
        hitSlop: 0,
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'disabled',
        keep: true,
      },
    ],
    variants: {
      true: {
        color: 'onView3',
      },
      false: {},
    },
  })
);
