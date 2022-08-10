import type { Ref } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type DateInputProps = {
  ref?: Ref<HTMLElement>;
  value: string;
  disabled?: boolean;
  onClick?: () => void;
  onClear?: () => void;
  placeholder?: string;
  calendarOpened?: boolean;
};

export const withDateInputVariation = withVariation<DateInputProps>('DateInput')();
