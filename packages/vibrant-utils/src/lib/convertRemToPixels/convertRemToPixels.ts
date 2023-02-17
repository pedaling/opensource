export const convertRemToPixels = (value: number | string): number | string => {
  if (typeof value === 'string' && value.endsWith('rem')) {
    return parseFloat(value.replace('rem', '')) * 16;
  }

  return value;
};
