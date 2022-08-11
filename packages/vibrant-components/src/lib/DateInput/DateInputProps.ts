import type { Ref } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type DateInputProps = {
  ref?: Ref<HTMLElement>;
  value: string;
  disabled?: boolean;
  onClick?: () => void;
  onClear?: () => void;
  label?: string;
  placeholder?: string;
  calendarOpened?: boolean;
  state?: 'default' | 'error';
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
        borderColor: 'outline1',
      },
      error: {
        color: 'error',
        borderColor: 'outlineError',
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
        backgroundColor: 'disable',
        borderColor: 'disableOutline',
      },
      false: {
        backgroundColor: 'surface3',
      },
    } as const,
  })
);
