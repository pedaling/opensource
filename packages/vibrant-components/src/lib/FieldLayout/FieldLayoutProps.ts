/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { OnColorToken, TypographyKind } from '@vibrant-ui/theme';

type FieldLayoutProps = {
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  state?: 'default' | 'error' | 'success';
  label?: string;
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
        bodyLevel: 2,
        helperTextBodyLevel: 4,
        helperTextSpacing: 4,
        px: 15,
        spacing: 12,
        iconSize: 20,
        hitSlop: 8,
      },
      md: {
        height: 38,
        bodyLevel: 2,
        helperTextBodyLevel: 4,
        helperTextSpacing: 4,
        px: 9,
        spacing: 8,
        iconSize: 20,
        hitSlop: 6,
      },
      sm: {
        height: 30,
        bodyLevel: 4,
        helperTextBodyLevel: 5,
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
    ],
    variants: ({ shrink, size, hasPrefixComponent, hasSuffixComponent }) => {
      if (size === 'md') {
        return {
          labelTop: shrink ? 3 : 9,
          labelTypography: shrink ? 'body6' : 'body2',
          labelLeft: hasPrefixComponent ? 8 : 9,
          labelRight: hasSuffixComponent ? 8 : 9,
        } as const;
      }

      if (size === 'sm') {
        return {
          labelTop: shrink ? 0 : 7,
          labelTypography: shrink ? 'body6' : 'body4',
          labelLeft: hasPrefixComponent ? 6 : 7,
          labelRight: hasSuffixComponent ? 6 : 7,
        } as const;
      }

      return {
        labelTop: shrink ? 7 : 15,
        labelTypography: shrink ? 'body6' : 'body2',
        labelLeft: hasPrefixComponent ? 12 : 15,
        labelRight: hasSuffixComponent ? 12 : 15,
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
    ],
    variants: ({
      size,
      label,
      hasPrefixText,
      hasPrefixComponent,
      hasSuffixComponent,
      hasSuffixText,
      showClearButton,
    }) => {
      if (size === 'md') {
        return {
          pt: label ? 15 : 9,
          pl: hasPrefixText ? 2 : hasPrefixComponent ? 8 : 9,
          pr: hasSuffixText ? 2 : hasSuffixComponent || showClearButton ? 8 : 9,
          pb: label ? 3 : 9,
        };
      }

      if (size === 'sm') {
        return {
          pt: label ? 12 : 7,
          pl: hasPrefixText ? 2 : hasPrefixComponent ? 6 : 7,
          pr: hasSuffixText ? 2 : hasSuffixComponent || showClearButton ? 6 : 7,
          pb: label ? 0 : 7,
        };
      }

      return {
        pt: label ? 23 : 15,
        pl: hasPrefixText ? 4 : hasPrefixComponent ? 12 : 15,
        pr: hasSuffixText ? 4 : hasSuffixComponent || showClearButton ? 12 : 15,
        pb: label ? 7 : 15,
      };
    },
  })
);
