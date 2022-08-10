export const toZeroPadded = (source: number | string | undefined, maxStringLength: number): string => {
  const sourceString = (source ?? '').toString();
  const sourceStringLength = sourceString.length;

  if (sourceStringLength > maxStringLength) {
    return sourceString;
  }

  const zeroPads = '0'.repeat(maxStringLength - sourceStringLength);

  return zeroPads + source;
};
