import type { ResponsiveValue } from '../../types';

export const toResponsiveValue = <Type>(value: ResponsiveValue<Type>, length: number) => {
  const responsiveValue = Array.isArray(value) ? value : [value];

  const lastValue = responsiveValue[responsiveValue.length - 1];

  return Array.from({ length }).map((_, idx) => responsiveValue[idx] ?? lastValue);
};
