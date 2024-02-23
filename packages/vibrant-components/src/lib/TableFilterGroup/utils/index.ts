import type { DateFilterOperator, MultiSelectFilterOperator, Option, StringFilterOperator } from '../types';

export const isValuelessOperator = (op: string) => op === 'empty' || op === 'notEmpty';

export const isStringFilterValid = (filter: { value: string; operator: StringFilterOperator }) =>
  Boolean(filter.value) || isValuelessOperator(filter.operator);

export const isRadioFilterValid = (filter: { value: string | undefined; operator: StringFilterOperator }) =>
  Boolean(filter.value) || isValuelessOperator(filter.operator);

export const isDateFilterValid = (filter: { value: Date[]; operator: DateFilterOperator }) => {
  if (isValuelessOperator(filter.operator)) return true;

  if (filter.operator === 'between') return filter.value.length >= 2;

  return filter.value.length >= 1;
};

export const isMultiSelectFilterValid = (filter: { value: Option['value'][]; operator: MultiSelectFilterOperator }) =>
  Boolean(filter.value.length > 0) || isValuelessOperator(filter.operator);
