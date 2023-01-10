import type { Ref } from 'react';
import type { ResponsiveValue, TextChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import { isDefined } from '@vibrant-ui/utils';
import type { PressableProps } from '../Pressable';

export type FilterChipProps = {
  ref?: Ref<any>;
  size: ResponsiveValue<'md' | 'sm'>;
  StartIconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
  EndIconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
  selected?: boolean;
  disabled?: boolean;
  onClick?: PressableProps['onClick'];
  children: TextChildren;
};

export const withFilterChipVariation = withVariation<FilterChipProps>('ContainedButton')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
      {
        name: 'StartIconComponent',
        keep: true,
      },
      { name: 'EndIconComponent', keep: true },
    ],
    variants: ({ size, StartIconComponent, EndIconComponent }) => {
      if (size === 'sm') {
        return {
          bodyLevel: 4,
          iconSize: 14,
          py: 6,
          pl: isDefined(StartIconComponent) ? 9 : 11,
          pr: isDefined(EndIconComponent) ? 9 : 11,
          spacing: 4,
        } as const;
      }

      return {
        bodyLevel: 2,
        iconSize: 16,
        py: 9,
        pl: isDefined(StartIconComponent) ? 11 : 15,
        pr: isDefined(EndIconComponent) ? 11 : 15,
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
          color: 'onPrimaryContainer',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'outlinePrimary',
          backgroundColor: 'primaryContainer',
        } as const;
      }

      return {
        color: 'onView1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'outline1',
        backgroundColor: 'background',
      } as const;
    },
  })
);
