import { get, isDefined, isRecord } from '@vibrant-ui/utils';
import type { SystemProp, SystemPropConfig, SystemPropThemeScale } from './type';

export const createSystemProp = (config: SystemPropConfig): SystemProp => {
  const { property, styleProperty, scale, disabled, shouldInterpolation, transform } = config;

  if (disabled) {
    return Object.assign(() => [], { propName: property, disabled: true });
  }

  return Object.assign(
    (input: any, theme: Record<SystemPropThemeScale, any>, interpolation: (props: any) => any = props => props) => {
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

        if (isDefined(transform)) {
          result = transform(result) ?? {};
        } else {
          result = { [targetProperty]: result };
        }

        if (shouldInterpolation === 'after' && isRecord(result)) {
          result = interpolation(result);
        }

        return result;
      });
    },
    {
      propName: property,
      disabled: false,
    }
  );
};
