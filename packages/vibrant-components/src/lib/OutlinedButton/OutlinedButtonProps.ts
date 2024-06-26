import type { Ref } from 'react';
import type { ResponsiveValue, TextChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import { Icon } from '@vibrant-ui/icons';
import type { PressableProps } from '../Pressable';

export type OutlinedButtonProps = {
  ref?: Ref<any>;
  size: ResponsiveValue<'lg' | 'md' | 'sm' | 'xl'>;
  type?: PressableProps['buttonType'];
  IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
  full?: ResponsiveValue<boolean>;
  active?: boolean;
  disclosure?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: PressableProps['onClick'];
  children: TextChildren;
  testId?: string;
  href?: string;
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
        iconSize: 12,
        disclosureSize: 12,
        contentsSpacing: 0,
        weight: 'medium',
      },
      md: {
        typography: 'body2',
        py: 9,
        px: 9,
        spinnerSize: 'md',
        iconSize: 14,
        disclosureSize: 14,
        contentsSpacing: 0,
        weight: 'medium',
      },
      lg: {
        typography: 'body2',
        py: 12,
        px: 11,
        spinnerSize: 'md',
        iconSize: 18,
        disclosureSize: 16,
        contentsSpacing: 0,
        weight: 'bold',
      },
      xl: {
        typography: 'body1',
        py: 14,
        px: 13,
        spinnerSize: 'md',
        iconSize: 20,
        disclosureSize: 18,
        contentsSpacing: 2,
        weight: 'bold',
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
