import type { CurrentTheme } from '@vibrant-ui/theme';
import { isDefined } from '@vibrant-ui/utils';
import { buildStyle } from '../buildStyle';
import type { SystemProp } from '../createSystemProp';
import { useCurrentTheme } from '../ThemeProvider';

const isObject = (obj: any) => typeof obj === 'object' && obj !== null;

export const createInterpolation = (systemProps: SystemProp[]) => {
  const cache: Record<string, SystemProp | null> = {};
  const enabledSystemProps = systemProps.filter(systemProp => !systemProp.disabled);
  const enabledSystemPropNames = enabledSystemProps.map(systemProp => systemProp.propName);

  const childInterpolation = (props: Record<string, any>, theme: CurrentTheme): Record<string, any>[] => {
    let result: Record<string, any>[] = [];

    if (!isObject(props)) {
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

      cache[key] ||= matchedSystemProp;

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

  return (props: Record<string, any>) => {
    const { theme } = useCurrentTheme();

    const interpolationResult = childInterpolation(props, theme);

    return buildStyle(interpolationResult, { theme });
  };
};

const mergeResponsiveValue = (original: Record<string, any>[], next: Record<string, any>[]) => {
  next.forEach((value, index) => {
    original[index] = { ...(original[index] ?? {}), ...value };
  });

  return original;
};
