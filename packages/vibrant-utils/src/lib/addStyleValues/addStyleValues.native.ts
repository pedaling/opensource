export const addStyleValues = (...values: (number | string)[]) =>
  values.reduce((sum: number, value) => sum + Number(value), 0);
