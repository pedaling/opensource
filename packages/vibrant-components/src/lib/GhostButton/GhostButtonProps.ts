import type { Ref } from 'react';
import type { ResponsiveValue, TextChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import { Icon } from '@vibrant-ui/icons';
import type { OnColorToken } from '@vibrant-ui/theme';
import type { Either } from '@vibrant-ui/utils';
import type { PressableProps } from '../Pressable/PressableProp';

type GhostButtonProps = {
  ref?: Ref<any>;
  color?: OnColorToken;
  size: ResponsiveValue<'lg' | 'md' | 'sm'>;
  type?: PressableProps['buttonType'];
  IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular'>;
  disabled?: boolean;
  onClick?: PressableProps['onClick'];
  children: TextChildren;
  testId?: string;
  href?: string;
} & Either<
  {
    disclosure?: boolean;
    active?: boolean;
  },
  {
    arrow?: 'bottom' | 'right' | 'top';
  }
>;

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
        name: 'arrow',
        keep: true,
      },
    ],
    variants: {
      top: {
        ArrowIconComponent: Icon.ChevronUp.Regular,
      },
      right: {
        ArrowIconComponent: Icon.ChevronRight.Regular,
      },
      bottom: {
        ArrowIconComponent: Icon.ChevronDown.Regular,
      },
    } as const,
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
