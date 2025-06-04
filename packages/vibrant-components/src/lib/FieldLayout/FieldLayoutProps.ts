/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { OnColorToken, TypographyKind } from '@vibrant-ui/theme';

type FieldLayoutProps = {
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  state?: 'default' | 'error' | 'success';
  kind?: 'default' | 'inline' | 'outline';
  label?: string;
  required?: boolean;
  helperText?: string;
  disabled?: boolean;
  focused?: boolean;
  filled?: boolean;
  prefixText?: string;
  suffixText?: string;
  showClearButton?: boolean;
  testId?: string;
  onClearButtonClick?: () => void;
  renderStart?: () => ReactElementChild;
  renderEnd?: () => ReactElementChild;
  onLabelClick: () => void;
  renderField: (style: {
    height: ResponsiveValue<number>;
    color: OnColorToken;
    pt: ResponsiveValue<number>;
    pl: ResponsiveValue<number>;
    pr: ResponsiveValue<number>;
    pb: ResponsiveValue<number>;
    typography: ResponsiveValue<TypographyKind>;
  }) => ReactElementChild;
};

export const withFieldLayoutVariation = withVariation<FieldLayoutProps>('FieldLayout')(
  propVariant({
    props: [
      {
        name: 'size',
        default: 'lg',
        keep: true,
        responsive: true,
      },
    ],
    variants: {
      lg: {
        height: 50,
        typography: 'body2',
        helperTextTypography: 'body4',
        helperTextSpacing: 4,
        px: 15,
        spacing: 12,
        iconSize: 20,
        hitSlop: 8,
      },
      md: {
        height: 38,
        typography: 'body2',
        helperTextTypography: 'body4',
        helperTextSpacing: 4,
        px: 9,
        spacing: 8,
        iconSize: 20,
        hitSlop: 6,
      },
      sm: {
        height: 30,
        typography: 'body4',
        helperTextTypography: 'body5',
        helperTextSpacing: 2,
        px: 7,
        spacing: 6,
        iconSize: 16,
        hitSlop: 4,
      },
    } as const,
  }),
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
        labelColor: 'onView2',
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
          borderColor: 'onViewError',
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
        borderColor: 'outlineDisable',
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
        name: 'kind',
        default: 'default' as const,
        keep: true,
      },
      {
        name: 'label',
        keep: true,
      },
    ],
    variants: ({ kind, label }) => ({
      showLabelInBox: kind === 'outline' ? false : Boolean(label),
    }),
  }),
  propVariant({
    props: [
      {
        name: 'kind',
        default: 'default' as const,
        keep: true,
      },
      {
        name: 'size',
        default: 'lg',
        responsive: true,
        keep: true,
      },
      {
        name: 'label',
        keep: true,
      },
    ],
    variants: ({ kind, size, label }) => ({
      useFixedLabel: kind !== 'outline' && (size === 'md' || size === 'sm') && Boolean(label),
    }),
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
      hasPrefixText: Boolean(prefixText),
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
      hasSuffixText: Boolean(suffixText),
      hasSuffixComponent: renderEnd !== undefined,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'shrink',
        keep: true,
      },
      {
        name: 'size',
        responsive: true,
        keep: true,
      },
      {
        name: 'hasPrefixComponent',
        keep: true,
      },
      {
        name: 'hasSuffixComponent',
        keep: true,
      },
      {
        name: 'showLabelInBox',
        keep: true,
      },
    ],
    variants: ({ shrink, size, hasPrefixComponent, hasSuffixComponent, showLabelInBox }) => {
      if (size === 'md') {
        return {
          labelTop: showLabelInBox ? 4 : shrink ? 3 : 9,
          labelTypography: showLabelInBox ? 'body2' : 'body3',
          labelLeft: showLabelInBox ? 10 : hasPrefixComponent ? 8 : 10,
          labelRight: showLabelInBox ? 4 : hasSuffixComponent ? 8 : 4,
        } as const;
      }

      if (size === 'sm') {
        return {
          labelTop: showLabelInBox ? 2 : shrink ? 0 : 6,
          labelTypography: showLabelInBox ? 'body5' : 'body4',
          labelLeft: showLabelInBox ? 10 : hasPrefixComponent ? 6 : 10,
          labelRight: showLabelInBox ? 4 : hasSuffixComponent ? 6 : 4,
        } as const;
      }

      return {
        labelTop: shrink ? 9 : 16,
        labelTypography: showLabelInBox ? (shrink ? 'body6' : 'body2') : 'body3',
        labelLeft: hasPrefixComponent ? 16 : 16,
        labelRight: hasSuffixComponent ? 16 : 16,
      } as const;
    },
  }),
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
      {
        name: 'showLabelInBox',
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
    ],
    variants: ({
      size,
      showLabelInBox,
      hasPrefixText,
      hasPrefixComponent,
      hasSuffixComponent,
      hasSuffixText,
      showClearButton,
    }) => {
      if (size === 'md') {
        return {
          pt: 10,
          pl: showLabelInBox ? 10 : hasPrefixText ? 2 : hasPrefixComponent ? 8 : 10,
          pr: showLabelInBox ? 10 : hasSuffixText ? 2 : hasSuffixComponent || showClearButton ? 8 : 10,
          pb: 10,
        };
      }

      if (size === 'sm') {
        return {
          pt: 6,
          pl: showLabelInBox ? 7 : hasPrefixText ? 2 : hasPrefixComponent ? 6 : 7,
          pr: showLabelInBox ? 7 : hasSuffixText ? 2 : hasSuffixComponent || showClearButton ? 6 : 7,
          pb: 6,
        };
      }

      return {
        pt: showLabelInBox ? 23 : 15,
        pl: hasPrefixText ? 4 : hasPrefixComponent ? 12 : 15,
        pr: hasSuffixText ? 4 : hasSuffixComponent || showClearButton ? 12 : 15,
        pb: showLabelInBox ? 7 : 15,
      };
    },
  })
);
