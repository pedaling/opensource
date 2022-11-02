import type { Ref } from 'react';
import type { ReactTextChildren, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import type { PressableProps } from '../Pressable';

export type OutlinedButtonProps = {
  ref?: Ref<any>;
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

export const withOutlinedButtonVariation = withVariation<OutlinedButtonProps>('OutlinedButton')(
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
        py: 6,
        px: 7,
        spinnerSize: 'sm',
        iconSize: 16,
        disclosureSize: 16,
      },
      md: {
        typography: 'body2',
        py: 8,
        px: 9,
        spinnerSize: 'md',
        iconSize: 18,
        disclosureSize: 16,
      },
      lg: {
        typography: 'body2',
        py: 12,
        px: 11,
        spinnerSize: 'md',
        iconSize: 18,
        disclosureSize: 16,
      },
      xl: {
        typography: 'body1',
        py: 14,
        px: 13,
        spinnerSize: 'md',
        iconSize: 20,
        disclosureSize: 18,
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'disabled',
        keep: true,
        default: false,
      },
    ],
    variants: {
      true: {
        backgroundColor: 'disable',
        borderColor: 'outlineDisable',
      },
      false: {
        backgroundColor: 'surface2',
        borderColor: 'outline1',
      },
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
