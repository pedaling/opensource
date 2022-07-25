import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { BaseColorToken } from '@vibrant-ui/theme';

export type NotificationBadgeProps = {
  children?: never;
  borderColor?: BaseColorToken;
} & (
  | {
      kind: 'dot';
      size: ResponsiveValue<'lg' | 'md' | 'sm'>;
      count?: never;
    }
  | {
      kind: 'number';
      size?: never;
      count: number;
    }
);

export const withNotificationBadgeVariation = withVariation<NotificationBadgeProps>()(
  propVariant({
    props: [
      {
        name: 'count',
        keep: true,
      },
    ],
    variants: ({ count }) => {
      if (count && count > 9) {
        return {
          count: '9+',
          px: 4,
        };
      }

      return {
        width: 14,
      };
    },
  }),
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
        default: 'sm' as const,
      },
    ],
    variants: {
      sm: {
        dotSize: 5,
      },
      md: {
        dotSize: 6,
      },
      lg: {
        dotSize: 8,
      },
    },
  }),
  propVariant({
    props: [
      {
        name: 'kind',
        keep: true,
      },
      {
        name: 'dotSize',
        responsive: true,
      },
    ],
    variants: ({ kind, dotSize }) => {
      if (kind === 'dot') {
        return {
          width: dotSize,
          height: dotSize,
          borderRadius: 4,
        };
      }

      return {
        width: 14,
        height: 14,
        borderRadius: 7,
        pb: 0.5,
      };
    },
  }),
  propVariant({
    props: [
      {
        name: 'borderColor',
      },
      {
        name: 'borderRadius',
        responsive: true,
        keep: true,
      },
    ],
    variants: ({ borderColor, borderRadius }) => {
      if (borderColor) {
        return {
          position: 'relative',
          pseudoBefore: {
            position: 'absolute',
            top: -2,
            left: -2,
            bottom: -2,
            right: -2,
            borderRadius: borderRadius + 2,
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor,
          },
        } as const;
      }

      return {};
    },
  })
);
