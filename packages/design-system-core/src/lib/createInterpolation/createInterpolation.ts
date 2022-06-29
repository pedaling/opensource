import { isDefined } from '@class101/design-system-utils';
import type { SystemProp } from '../createSystemProp';

const isObject = (obj: any) => typeof obj === 'object' && obj !== null;

export const createInterpolation = (systemProps: SystemProp[]) => {
  const cache: Record<string, SystemProp | null> = {};
  const propNames = systemProps.filter(prop => !prop.disabled).map(systemProp => systemProp.propName);

  const interpolation = (props: Record<string, any>): Record<string, any> => {
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
        cache[key] === undefined ? systemProps.find(systemProp => systemProp.propName === key) : cache[key];

      if (!matchedSystemProp) {
        cache[key] = null;

        continue;
      }

      cache[key] ||= matchedSystemProp;

      if (!isDefined(value)) {
        continue;
      }

      const prop = {
        [key]: interpolation(value),
      };

      result = mergeMediaQueries(result, matchedSystemProp(prop));
    }

    return result;
  };

  return interpolation;
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
