import { css } from '@emotion/css';
import { get, isDefined, isRecord } from '@vibrant-ui/utils';
import type { SystemProp, SystemPropConfig, SystemPropThemeScale } from './type';

export const createSystemProp = (config: SystemPropConfig): SystemProp => {
  const { property, styleProperty, scale, disabled, shouldInterpolation } = config;

  if (disabled) {
    return Object.assign(() => [], { propName: property, disabled: true });
  }

  return Object.assign(
    (input: any, theme: Record<SystemPropThemeScale, any>, interpolation: (props: any) => any = props => props) => {
      const style = () => {
        if (input === undefined) {
          return [];
        }

        const targetProperty = styleProperty ?? property;

        return [input].flat().map(value => {
          let result = get(theme, `${scale}.${value}`, value);

          if (typeof result === 'string' && result.startsWith('$')) {
            result = get(theme, result.replace('$', ''), result);
          }

          if (shouldInterpolation === 'before' && isRecord(result)) {
            result = interpolation(result);
          }

          if ('transform' in config && isDefined(config.transform)) {
            result = config.transform(result) ?? {};
          } else if ('generateClassName' in config && isDefined(config.generateClassName)) {
            const newClassNames = config.generateClassName?.(result) ?? [];

            result = {
              className: [result.className, ...newClassNames].filter(isDefined).join(' '),
            };
          } else {
            const newClassName = css({ [targetProperty]: result });

            result = {
              className: [result.className, newClassName].filter(isDefined).join(' '),
            };
          }

          if (shouldInterpolation === 'after' && isRecord(result)) {
            result = interpolation(result);
          }

          return result;
        });
      };

      return style();
    },
    {
      propName: property,
      disabled: false,
    }
  );
};
