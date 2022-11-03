import type { Ref } from 'react';
import type { ResponsiveValue, TextChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import { Icon } from '@vibrant-ui/icons';
import type { OnColorToken } from '@vibrant-ui/theme';
import type { PressableProps } from '../Pressable/PressableProp';

type GhostButtonProps = {
  ref?: Ref<any>;
  color?: OnColorToken;
  size: ResponsiveValue<'lg' | 'md' | 'sm'>;
  type?: PressableProps['buttonType'];
  IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
  disclosure?: 'bottom' | 'none' | 'right' | 'top';
  disabled?: boolean;
  onClick?: PressableProps['onClick'];
  children: TextChildren;
};

export const withGhostButtonVariation = withVariation<GhostButtonProps>('GhostButton')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
    ],
    variants: {
      sm: {
        typography: 'body5',
        fontWeight: 'regular',
        iconSize: 10,
      },
      md: {
        typography: 'body2',
        fontWeight: 'medium',
        iconSize: 14,
      },
      lg: {
        typography: 'body1',
        fontWeight: 'medium',
        iconSize: 16,
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
  }),
  propVariant({
    props: [
      {
        name: 'disclosure',
        default: 'none',
      },
    ],
    variants: {
      top: {
        DisclosureIconComponent: Icon.ChevronUp.Regular,
      },
      right: {
        DisclosureIconComponent: Icon.ChevronRight.Regular,
      },
      bottom: {
        DisclosureIconComponent: Icon.ChevronDown.Regular,
      },
      none: {
        DisclosureIconComponent: null,
      },
    } as const,
  })
);
