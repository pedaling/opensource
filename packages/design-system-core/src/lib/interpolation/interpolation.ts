import type { SystemProp } from '../createSystemProp';
import { systemProps, propNames } from '../props';

const systemPropCache: Record<string, SystemProp | null> = {};

const isObject = (obj: Record<string, any>) => typeof obj === 'object' && obj !== null;

export const interpolation = (props: Record<string, any>): Record<string, any> => {
  let result = {};

  if (!isObject(props)) {
    return props;
  }

  if (Array.isArray(props)) {
    return props.map(prop => interpolation(prop));
  }

  if (!Object.keys(props).some(key => propNames.includes(key))) {
    return {};
  }

  for (const [key, value] of Object.entries(props)) {
    const matchedSystemProp =
      systemPropCache[key] === undefined
        ? systemProps.find(systemProp => systemProp.propName === key)
        : systemPropCache[key];

    if (!matchedSystemProp) {
      systemPropCache[key] = null;

      continue;
    }

    systemPropCache[key] ||= matchedSystemProp;

    const prop = {
      [key]: interpolation(value),
    };

    result = mergeMediaQueries(result, matchedSystemProp(prop));
  }

  return result;
};

const mergeMediaQueries = (original: Record<string, any>, next: Record<string, any>) => {
  const mediaQueryProperties: Record<string, any> = {};

  for (const key of Object.keys(next)) {
    if (key.startsWith('@media')) {
      mediaQueryProperties[key] = { ...(original[key] ?? {}), ...next[key] };
    }
  }

  return { ...original, ...next, ...mediaQueryProperties };
};
