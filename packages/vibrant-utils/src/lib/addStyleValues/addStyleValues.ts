export const addStyleValues = (...values: (number | string)[]) =>
  `calc(${values.map(value => (typeof value === 'number' ? `${value}px` : value)).join(' + ')})`;
