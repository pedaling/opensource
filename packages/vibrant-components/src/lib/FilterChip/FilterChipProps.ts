import type { ReactElement, Ref } from 'react';
import type { ResponsiveValue, TextChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { PressableProps } from '../Pressable';

export type FilterChipProps = {
  ref?: Ref<any>;
  size: ResponsiveValue<'md' | 'sm'>;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  selected?: boolean;
  disabled?: boolean;
  onClick?: PressableProps['onClick'];
  children: TextChildren;
  testId?: string;
  href?: string;
  lineLimit?: ResponsiveValue<number>;
  maxWidth?: ResponsiveValue<number | string>;
};

export const withFilterChipVariation = withVariation<FilterChipProps>('FilterChip')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
      {
        name: 'startIcon',
        keep: true,
      },
      { name: 'endIcon', keep: true },
    ],
    variants: ({ size }) => {
      if (size === 'sm') {
        return {
          bodyLevel: 4,
          iconSize: 14,
          minHeight: 30,
          px: 8,
          py: 7,
          spacing: 3,
          rounded: 'lg',
        } as const;
      }

      return {
        bodyLevel: 2,
        iconSize: 16,
        minHeight: 38,
        p: 10,
        spacing: 4,
        rounded: 'xl',
      } as const;
    },
  }),
  propVariant({
    props: [
      {
        name: 'selected',
        default: false,
      },
      {
        name: 'disabled',
        default: false,
        keep: true,
      },
    ],
    variants: ({
      selected,
      disabled,
    }: {
      selected: FilterChipProps['selected'];
      disabled: FilterChipProps['disabled'];
    }) => {
      if (disabled) {
        return {
          color: 'onView3',
          backgroundColor: selected ? 'disable' : 'surface1',
        } as const;
      }

      if (selected) {
        return {
          color: 'onInverseSurface',
          backgroundColor: 'inverseSurface',
          overlayColor: 'onView1',
          interactions: ['hover', 'focus', 'active'],
        } as const;
      }

      return {
        color: 'onView1',
        backgroundColor: 'surface1',
        overlayColor: 'onView1',
        interactions: ['hover', 'focus', 'active'],
      } as const;
    },
  })
);
