import { toZeroPadded } from '../toZeroPadded';

export const getDateString = (date: Date, divider = '-') =>
  [date.getFullYear(), toZeroPadded(date.getMonth() + 1, 2), toZeroPadded(date.getDate(), 2)].join(divider);
