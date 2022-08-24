import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { OnColorToken } from '@vibrant-ui/theme';

type FieldLayoutProps = {
  state?: 'default' | 'error';
  label?: string;
  helperText?: string;
  disabled?: boolean;
  focused?: boolean;
  filled?: boolean;
  onLabelClick: () => void;
  renderField: (_: { color: OnColorToken; pt: number; pl: number; pr: number; pb: number }) => ReactElementChild;
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
  }),
  propVariant({
    props: [
      {
        name: 'label',
        keep: true,
      },
    ],
    variants: ({ label }) => ({
      pt: label ? 23 : 15,
      pl: 15,
      pr: 15,
      pb: label ? 7 : 15,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'disabled',
        default: false,
        keep: true,
      },
    ],
    variants: {
      true: {
        cursor: 'default',
        backgroundColor: 'disable',
        textColor: 'onView3',
        borderColor: 'disableOutline',
        valueColor: 'onView3',
      },
      false: {
        cursor: 'text',
        backgroundColor: 'surface3',
        valueColor: 'onView1',
      },
    } as const,
  })
);
