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
  prefixText?: string;
  suffixText?: string;
  renderStart?: () => ReactElementChild;
  renderEnd?: () => ReactElementChild;
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
    variants: ({ focused, filled }) => ({
      shrink: focused || filled,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'shrink',
        keep: true,
      },
    ],
    variants: {
      true: {
        animation: {
          top: 7,
          typography: 'body6',
        },
      },
      false: {
        animation: {
          top: 15,
          typography: 'body2',
        },
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'disabled',
        default: false,
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
  }),
  propVariant({
    props: [
      {
        name: 'prefixText',
        keep: true,
      },
      {
        name: 'renderStart',
        keep: true,
      },
    ],
    variants: ({ prefixText, renderStart }) => ({
      hasPrefix: prefixText || renderStart,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'suffixText',
        keep: true,
      },
      {
        name: 'renderEnd',
        keep: true,
      },
    ],
    variants: ({ suffixText, renderEnd }) => ({
      hasSuffix: suffixText || renderEnd,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'label',
        keep: true,
      },
      {
        name: 'hasPrefix',
      },
      {
        name: 'hasSuffix',
      },
    ],
    variants: ({ label, hasPrefix, hasSuffix }) => ({
      pt: label ? 23 : 15,
      pl: hasPrefix ? 12 : 15,
      pr: hasSuffix ? 12 : 15,
      pb: label ? 7 : 15,
    }),
  })
);
