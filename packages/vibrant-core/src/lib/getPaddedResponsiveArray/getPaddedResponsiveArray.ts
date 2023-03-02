import type { ResponsiveValue } from '../../types';

export const getPaddedResponsiveArray = <Type>(breakpoints: number[], value: ResponsiveValue<Type>) => {
  const arrayValue = Array.isArray(value) ? value : [value];
  const breakpointCount = breakpoints.length;

  if (breakpointCount < arrayValue.length) {
    return arrayValue.slice(0, breakpointCount + 1);
  }

  const lastValue = arrayValue[arrayValue.length - 1];

  return Array.from({ length: breakpointCount + 1 }, (_, index) => {
    if (index < arrayValue.length) {
      return arrayValue[index];
    }

    return lastValue;
  });
};
