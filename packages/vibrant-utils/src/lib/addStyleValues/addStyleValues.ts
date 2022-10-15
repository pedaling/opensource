export const addStyleValues = (...values: (number | string)[]) =>
  values.some(value => typeof value !== 'number')
    ? `calc(${values.map(value => (typeof value === 'number' ? `${value}px` : value)).join(' + ')})`
    : values.reduce((sum: number, value) => (value ? sum + Number(value) : sum), 0);
