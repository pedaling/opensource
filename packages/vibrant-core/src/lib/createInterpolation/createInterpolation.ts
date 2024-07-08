import type { CurrentTheme } from '@vibrant-ui/theme';
import { isDefined, isRecord } from '@vibrant-ui/utils';
import type { SystemProp } from '../createSystemProp';
import { useBuildStyle } from '../useBuildStyle';

export const createInterpolation = (systemProps: SystemProp[], defaultProps: any = {}) => {
  const cache: Record<string, SystemProp | null> = {};
  const enabledSystemProps = systemProps.filter(systemProp => !systemProp.disabled);
  const enabledSystemPropNames = enabledSystemProps.map(systemProp => systemProp.propName);

  const childInterpolation = (props: Record<string, any>, theme: CurrentTheme): Record<string, any>[] => {
    let result: Record<string, any>[] = [];

    if (!isRecord(props)) {
      return [props];
    }

    if (!Object.keys(props).some(key => enabledSystemPropNames.includes(key))) {
      return [];
    }

    for (const [key, value] of Object.entries(props)) {
      const matchedSystemProp =
        cache[key] === undefined ? enabledSystemProps.find(systemProp => systemProp.propName === key) : cache[key];

      if (!matchedSystemProp) {
        cache[key] = null;

        continue;
      }

      cache[key] = cache[key] || matchedSystemProp;

      if (!isDefined(value)) {
        continue;
      }

      const matchedProps = matchedSystemProp(
        value,
        theme,
        interpolationProps => childInterpolation(interpolationProps, theme)[0]
      );

      result = mergeResponsiveValue(result, matchedProps);
    }

    return result;
  };

  return ({ theme, props }: { theme: CurrentTheme; props: Record<string, any> }) => {
    const interpolationResult = childInterpolation({ ...defaultProps, ...props }, theme);

    return useBuildStyle({ styleObjects: interpolationResult, theme });
  };
};

const mergeResponsiveValue = (original: Record<string, any>[], next: Record<string, any>[]) => {
  next.forEach((value, index) => {
    original[index] = {
      ...(original[index] ?? {}),
      ...value,
      ...(value['props'] || original[index]?.['props']
        ? {
            props: {
              ...(original[index]?.['props'] ?? {}),
              ...(value['props'] ?? {}),
            },
          }
        : {}),
    };
  });

  return original;
};
