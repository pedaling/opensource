import { ChevronDown, ChevronRight, ChevronUp } from 'packages/vibrant-icons/src/lib/Icon/generated';
import type { Ref } from 'react';
import type { ReactTextChild, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
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
  children: ReactTextChild;
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
      },
    ],
    variants: {
      top: {
        DisclosureIconComponent: ChevronUp.Regular,
      },
      right: {
        DisclosureIconComponent: ChevronRight.Regular,
      },
      bottom: {
        DisclosureIconComponent: ChevronDown.Regular,
      },
      none: {
        DisclosureIconComponent: null,
      },
    } as const,
  })
);
