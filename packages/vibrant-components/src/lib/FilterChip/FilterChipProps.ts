import type { ReactElement, Ref } from 'react';
import type { ResponsiveValue, TextChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
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
    variants: ({ size, startIcon, endIcon }) => {
      if (size === 'sm') {
        return {
          bodyLevel: 4,
          iconSize: 14,
          minHeight: 30,
          pl: isDefined(startIcon) ? 9 : 11,
          pr: isDefined(endIcon) ? 9 : 11,
          py: 6,
          spacing: 4,
        } as const;
      }

      return {
        bodyLevel: 2,
        iconSize: 16,
        minHeight: 38,
        pl: isDefined(startIcon) ? 11 : 15,
        pr: isDefined(endIcon) ? 11 : 15,
        py: 9,
        spacing: 6,
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
    variants: ({ selected, disabled }) => {
      if (disabled) {
        return {
          color: 'onView3',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'outlineDisable',
          backgroundColor: selected ? 'disable' : 'transparent',
        } as const;
      }

      if (selected) {
        return {
          color: 'onInverseSurface',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'outlineNeutral',
          backgroundColor: 'inverseSurface',
          overlayColor: 'onView1',
          interactions: ['hover', 'focus', 'active'],
        } as const;
      }

      return {
        color: 'onView1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'outline1',
        backgroundColor: 'background',
        overlayColor: 'onView1',
        interactions: ['hover', 'focus', 'active'],
      } as const;
    },
  })
);
