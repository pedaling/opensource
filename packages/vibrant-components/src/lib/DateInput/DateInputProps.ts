import type { Ref } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type DateInputProps = {
  ref?: Ref<HTMLElement>;
  value: string;
  disabled?: boolean;
  onFocus?: () => void;
  onClear?: () => void;
  onClick?: () => void;
  label?: string;
  placeholder?: string;
  calendarOpened?: boolean;
  helperText?: string;
  state?: 'default' | 'error';
  autoFocus?: boolean;
};

export const withDateInputVariation = withVariation<DateInputProps>('DateInput')(
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
        labelColor: 'error',
        borderColor: 'outlineError',
        helperColor: 'error',
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
        placeholderColor: 'onView3',
      },
      false: {
        backgroundColor: 'surface3',
        placeholderColor: 'onView2',
      },
    } as const,
  })
);
