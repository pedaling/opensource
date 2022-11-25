/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { OnColorToken } from '@vibrant-ui/theme';

type FieldLayoutProps = {
  state?: 'default' | 'error' | 'success';
  label?: string;
  helperText?: string;
  disabled?: boolean;
  focused?: boolean;
  filled?: boolean;
  prefixText?: string;
  suffixText?: string;
  showClearButton?: boolean;
  onClearButtonClick?: () => void;
  renderStart?: () => ReactElementChild;
  renderEnd?: () => ReactElementChild;
  onLabelClick: () => void;
  renderField: (style: {
    height: ResponsiveValue;
    color: OnColorToken;
    pt: ResponsiveValue;
    pl: ResponsiveValue;
    pr: ResponsiveValue;
    pb: ResponsiveValue;
  }) => ReactElementChild;
  size?: ResponsiveValue<'lg' | 'md'>;
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
        labelColor: 'onView2',
        helperTextColor: 'onView2',
      },
      error: {
        labelColor: 'onViewError',
        helperTextColor: 'onViewError',
      },
      success: {
        labelColor: 'onView2',
        helperTextColor: 'onViewSuccess',
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
        labelColor: 'onView3',
        helperTextColor: 'onView3',
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
      hasPrefixText: prefixText,
      hasPrefixComponent: renderStart !== undefined,
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
      hasSuffixText: suffixText,
      hasSuffixComponent: renderEnd !== undefined,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'size',
        default: 'lg' as const,
        responsive: true,
      },
    ],
    variants: {
      md: {
        pt: {
          hasLabel: 3,
          default: 7,
        },
        pl: {
          hasText: 2,
          hasComponent: 8,
          default: 10,
        },
        pr: {
          hasText: 2,
          hasComponent: 8,
          default: 10,
        },
        pb: {
          hasLabel: 3,
          default: 7,
        },
        height: 38,
        iconSize: 16,
        prefixTextPl: {
          hasComponent: 12,
          default: 0,
        },
        suffixTextPr: {
          hasComponent: 12,
          default: 0,
        },
        labelPosition: {
          hasComponent: 8,
          default: 10,
        },
        layoutFieldPl: {
          hasComponent: 12,
          default: 0,
        },
        layoutFieldPr: {
          hasComponent: 12,
          default: 0,
        },
      },
      lg: {
        pt: {
          hasLabel: 23,
          default: 15,
        },
        pl: {
          hasText: 4,
          hasComponent: 12,
          default: 15,
        },
        pr: {
          hasText: 4,
          hasComponent: 12,
          default: 15,
        },
        pb: {
          hasLabel: 7,
          default: 15,
        },
        height: 50,
        iconSize: 20,
        prefixTextPl: {
          hasComponent: 15,
          default: 16,
        },
        suffixTextPr: {
          hasComponent: 15,
          default: 16,
        },
        labelPosition: {
          hasComponent: 12,
          default: 15,
        },
        layoutFieldPl: {
          hasComponent: 15,
          default: 0,
        },
        layoutFieldPr: {
          hasComponent: 15,
          default: 0,
        },
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'label',
        keep: true,
      },
      {
        name: 'hasPrefixText',
      },
      {
        name: 'hasSuffixText',
      },
      {
        name: 'hasPrefixComponent',
      },
      {
        name: 'hasSuffixComponent',
      },
      {
        name: 'showClearButton',
        keep: true,
      },
      {
        name: 'pt',
        responsive: true,
      },
      {
        name: 'pl',
        responsive: true,
      },

      {
        name: 'pr',
        responsive: true,
      },
      {
        name: 'pb',
        responsive: true,
      },
      {
        name: 'height',
        responsive: true,
      },
      {
        name: 'iconSize',
        responsive: true,
      },
      {
        name: 'prefixTextPl',
        responsive: true,
      },
      {
        name: 'suffixTextPr',
        responsive: true,
      },
      {
        name: 'labelPosition',
        responsive: true,
      },
      {
        name: 'layoutFieldPl',
        responsive: true,
      },
      {
        name: 'layoutFieldPr',
        responsive: true,
      },
    ],
    variants: ({
      label,
      hasPrefixText,
      hasPrefixComponent,
      hasSuffixComponent,
      hasSuffixText,
      showClearButton,
      pt,
      pl,
      pr,
      pb,
      height,
      iconSize,
      prefixTextPl,
      suffixTextPr,
      labelPosition,
      layoutFieldPl,
      layoutFieldPr,
    }) => ({
      pt: label ? pt.hasLabel : pt.default,
      pl: hasPrefixText ? pl.hasText : hasPrefixComponent ? pl.hasComponent : pl.default,
      pr: hasSuffixText ? pr.hasText : hasSuffixComponent || showClearButton ? pr.hasComponent : pr.default,
      pb: label ? pb.hasLabel : pb.default,
      height,
      iconSize,
      prefixTextPl: hasPrefixComponent ? prefixTextPl.hasComponent : prefixTextPl.default,
      suffixTextPr: hasSuffixComponent || showClearButton ? suffixTextPr.hasComponent : suffixTextPr.default,
      labelPositionLeft: hasPrefixComponent ? labelPosition.hasComponent : labelPosition.default,
      labelPositionRight: hasSuffixComponent ? labelPosition.hasComponent : labelPosition.default,
      layoutFieldPl: hasPrefixComponent ? layoutFieldPl.hasComponent : layoutFieldPl.default,
      layoutFieldPr: hasSuffixComponent ? layoutFieldPr.hasComponent : layoutFieldPr.default,
    }),
  })
);
