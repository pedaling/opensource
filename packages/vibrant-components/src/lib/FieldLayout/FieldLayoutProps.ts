import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

type FieldLayoutProps = {
  state?: 'default' | 'error';
  label?: string;
  helperText?: string;
  focused?: boolean;
  filled?: boolean;
  renderField: (_: { pt: number; pl: number; pr: number; pb: number }) => ReactElementChild;
};

export const withFieldLayoutVariation = withVariation<FieldLayoutProps>('FieldLayout')(
  propVariant({
    props: [
      {
        name: 'state',
        default: 'default' as const,
        keep: true,
      },
    ],
    variants: {
      default: {
        textColor: 'onView2',
      },
      error: {
        textColor: 'error',
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'state',
        default: 'default' as const,
      },
      {
        name: 'focused',
        default: false,
        keep: true,
      },
    ],
    variants: ({ state, focused }) => {
      if (state === 'error') {
        return {
          borderColor: 'error',
        };
      }

      if (focused) {
        return {
          borderColor: 'outlineNeutral',
        };
      }

      return {
        borderColor: 'outline1',
      };
    },
  }),
  propVariant({
    props: [
      {
        name: 'focused',
        default: false,
      },
      {
        name: 'filled',
        default: false,
      },
    ],
    variants: ({ focused, filled }) =>
      ({
        animation: {
          top: focused || filled ? 7 : 15,
          typography: focused || filled ? 'body6' : 'body2',
        },
      } as const),
  })
);
