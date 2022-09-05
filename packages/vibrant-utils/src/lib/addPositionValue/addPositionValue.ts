import { isDefined } from '../isDefined';

const toStringValue = (value: number | string) => (typeof value === 'number' ? `${value}px` : value);

export const addPositionValue = (...values: (number | string | undefined)[]) => {
  if (values.some(value => typeof value === 'string')) {
    return `calc(${values
      .filter(isDefined)
      .map(value => toStringValue(value))
      .join(' + ')})`;
  }

  return (values as number[]).reduce((sum, value) => (isDefined(value) ? sum + value : sum), 0);
};
