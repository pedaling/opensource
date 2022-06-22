import flatten from 'lodash/flatten';
import get from 'lodash/get';
import { isDefined } from '@class101/design-system-utils';
import { useTheme } from '../ThemeProvider';
import { useBuildStyle } from '../useBuildStyle';
import type { SystemProp, SystemPropConfig } from './type';

export const createSystemProp = (config: SystemPropConfig): SystemProp => {
  const { property, styleProperty, scale, disabled, transform } = config;

  if (disabled) {
    return Object.assign(() => ({}), { propName: property, disabled: true });
  }

  return Object.assign(
    (props: Record<string, any>) => {
      const { theme } = useTheme();
      const buildStyle = useBuildStyle();

      const input = props[property];

      const style = () => {
        if (input === undefined) {
          return {};
        }

        const targetProperty = styleProperty ?? property;
        const styleObjects = flatten([input])
          .map(value => (isDefined(transform) ? transform(value) ?? {} : { [targetProperty]: value }))
          .map(rawStyleObject =>
            Object.entries(rawStyleObject).reduce(
              (acc, [key, value]) => ({
                ...acc,
                [key]: (isDefined(theme) && isDefined(scale) ? get(theme[scale], value) : undefined) ?? value,
              }),
              {}
            )
          );

        return buildStyle(styleObjects, { theme });
      };

      return style();
    },
    {
      propName: property,
      disabled: false,
    }
  );
};
