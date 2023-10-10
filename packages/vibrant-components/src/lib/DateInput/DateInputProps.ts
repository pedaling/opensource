import type { Ref } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { ResponsiveValue } from '@vibrant-ui/core';

export type DateInputProps = {
  ref?: Ref<HTMLElement>;
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  value: string;
  disabled?: boolean;
  onFocus?: () => void;
  onClear?: () => void;
  label?: string;
  placeholder?: string;
  calendarOpened?: boolean;
  helperText?: string;
  state?: 'default' | 'error';
  autoFocus?: boolean;
  testId?: string;
};

export const withDateInputVariation = withVariation<DateInputProps>('DateInput')(
  propVariant({
    props: [
      {
        name: 'size',
        default: 'lg',
        responsive: true,
      },
    ],
    variants: {
      lg: {
        height: 50,
        px: 15,
        labelSpacing: 4,
        bodyLevel: 2,
        helperTextBodyLevel: 4,
        helperTextSpacing: 4,
        iconSize: 20,
        iconSpacing: 12,
        hitSlop: 8,
      },
      md: {
        height: 38,
        px: 9,
        labelSpacing: 0,
        bodyLevel: 2,
        helperTextBodyLevel: 4,
        helperTextSpacing: 4,
        iconSize: 20,
        iconSpacing: 8,
        hitSlop: 6,
      },
      sm: {
        height: 30,
        px: 7,
        labelSpacing: 0,
        bodyLevel: 4,
        helperTextBodyLevel: 5,
        helperTextSpacing: 2,
        iconSize: 16,
        iconSpacing: 6,
        hitSlop: 4,
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'state',
        default: 'default',
        keep: true,
      },
    ],
    variants: {
      default: {
        color: 'onView1',
        labelColor: 'onView2',
        borderColor: 'outline1',
        helperColor: 'onView2',
      },
      error: {
        color: 'onView1',
        labelColor: 'onViewError',
        borderColor: 'outlineError',
        helperColor: 'onViewError',
      },
    } as const,
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
        color: 'onView3',
        labelColor: 'onView3',
        backgroundColor: 'disable',
        borderColor: 'outlineDisable',
        helperColor: 'onView3',
      },
      false: {
        backgroundColor: 'surface3',
      },
    } as const,
  })
);
