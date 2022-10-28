import type { Ref } from 'react';
import type { ReactTextChildren, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import type { PressableProps } from '../Pressable';

export type ContainedButtonProps = {
  ref?: Ref<any>;
  kind: 'primary' | 'secondary' | 'tertiary';
  size: ResponsiveValue<'lg' | 'md' | 'sm' | 'xl'>;
  type?: PressableProps['buttonType'];
  IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
  full?: ResponsiveValue<boolean>;
  disclosure?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: PressableProps['onClick'];
  children: ReactTextChildren;
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
      sm: {
        typography: 'body4',
        py: 7,
        px: 8,
        spinnerSize: 'sm',
      },
      md: {
        typography: 'body2',
        py: 10,
        px: 10,
        spinnerSize: 'md',
      },
      lg: {
        typography: 'body2',
        py: 13,
        px: 12,
        spinnerSize: 'md',
      },
      xl: {
        typography: 'body1',
        py: 15,
        px: 14,
        spinnerSize: 'md',
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
  })
);
