export const get = (obj: Record<string, any>, path: string, defaultValue?: any): any => {
  const result = path
    .split('.')
    .filter(Boolean)
    .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);

  return result === undefined || result === obj ? defaultValue : result;
};
