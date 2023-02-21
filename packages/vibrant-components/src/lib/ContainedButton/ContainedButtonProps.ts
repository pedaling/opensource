import type { Ref } from 'react';
import type { ResponsiveValue, TextChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import { Icon } from '@vibrant-ui/icons';
import type { PressableProps } from '../Pressable';
import { sizeVariation } from './constants/size';

export type ContainedButtonProps = {
  ref?: Ref<any>;
  kind: 'primary' | 'secondary' | 'tertiary';
  size: ResponsiveValue<'lg' | 'md' | 'sm' | 'xl'>;
  type?: PressableProps['buttonType'];
  IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
  full?: ResponsiveValue<boolean>;
  disclosure?: boolean;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: PressableProps['onClick'];
  children: TextChildren;
  testId?: string;
};

export const withContainedButtonVariation = withVariation<ContainedButtonProps>('ContainedButton')(
  propVariant({
    props: [
      {
        name: 'kind',
      },
    ],
    variants: {
      primary: {
        backgroundColor: 'primary',
        onColor: 'onPrimary',
      },
      secondary: {
        backgroundColor: 'inverseSurface',
        onColor: 'onInverseSurface',
      },
      tertiary: {
        backgroundColor: 'surface1',
        onColor: 'onView1',
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
    ],
    variants: {
      sm: sizeVariation.sm,
      md: sizeVariation.md,
      lg: sizeVariation.lg,
      xl: sizeVariation.xl,
    },
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
        backgroundColor: 'disable',
        onColor: 'onView3',
      },
      false: {},
    },
  }),
  propVariant({
    props: [
      {
        name: 'full',
        responsive: true,
        default: false,
      },
    ],
    variants: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },
  }),
  propVariant({
    props: [
      {
        name: 'disclosure',
      },
      {
        name: 'active',
      },
    ],
    variants: ({ disclosure, active }) => {
      if (!disclosure) {
        return {
          DisclosureIconComponent: null,
        };
      }

      if (active) {
        return { DisclosureIconComponent: Icon.ArrowTriangleUp.Fill };
      }

      return { DisclosureIconComponent: Icon.ArrowTriangleDown.Fill };
    },
  })
);
