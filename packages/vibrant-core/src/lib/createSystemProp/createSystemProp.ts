import { get, isDefined } from '@vibrant-ui/utils';
import { useCurrentTheme } from '../ThemeProvider';
import { useBuildStyle } from '../useBuildStyle';
import type { SystemProp, SystemPropConfig } from './type';

export const createSystemProp = (config: SystemPropConfig): SystemProp => {
  const { property, styleProperty, scale, disabled, transform } = config;

  if (disabled) {
    return Object.assign(() => ({}), { propName: property, disabled: true });
  }

  return Object.assign(
    (props: Record<string, any>) => {
      const { theme } = useCurrentTheme();
      const buildStyle = useBuildStyle();

      const input = props[property];

      const style = () => {
        if (input === undefined) {
          return {};
        }

        const targetProperty = styleProperty ?? property;

        const styleObjects = [input].flat().map(value => {
          const result = get(theme, `${scale}.${value}`, value);

          return isDefined(transform) ? transform(result) ?? {} : { [targetProperty]: result };
        });

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
