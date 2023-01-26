import type { DateFilterOperator, MultiSelectFilterOperator, Option, StringFilterOperator } from '../types';

export const isValueRequiredOperator = (op: string) => op === 'empty' || op === 'notEmpty';

export const isStringFilterValid = (filter: { value: string; operator: StringFilterOperator }) =>
  Boolean(filter.value) || isValueRequiredOperator(filter.operator);

export const isDateFilterValid = (filter: { value: Date[]; operator: DateFilterOperator }) => {
  if (isValueRequiredOperator(filter.operator)) return true;

  if (filter.operator === 'between') return filter.value.length >= 2;

  return filter.value.length >= 1;
};

export const isMultiSelectFilterValid = (filter: { value: Option['value'][]; operator: MultiSelectFilterOperator }) =>
  Boolean(filter.value.length > 0) || isValueRequiredOperator(filter.operator);
