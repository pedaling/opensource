import type { ResponsiveValue } from '../types';
import type { VariantFn, SkipForwards, AnyPropConfig, VariantsReturnProps, VariantsConfig } from './type';

export const toResponsiveValue = <Type>(value: ResponsiveValue<Type>, length: number) => {
  const responsiveValue = Array.isArray(value) ? value : [value];

  const lastValue = responsiveValue[responsiveValue.length - 1];

  return Array.from({ length }).map((_, idx) => responsiveValue[idx] ?? lastValue);
};

const getVariationProps = <Props extends Record<string, any>>(
  variants: any,
  props: Record<keyof Props, unknown>,
  variantKey: unknown
) => {
  if (typeof variants === 'function') {
    return variants(props);
  }

  return variants[variantKey as string];
};

export const propVariant =
  <
    Props extends Record<string, any>,
    PropsConfig extends AnyPropConfig<Props>[],
    Variants extends VariantsConfig<Props, PropsConfig>
  >({
    props,
    variants,
  }: {
    props: [...PropsConfig];
    variants: Variants;
  }): VariantFn<Props, SkipForwards<Props, PropsConfig> & VariantsReturnProps<PropsConfig, Variants>> =>
  (prevProps: any) => {
    const shouldHandleResponsive = props.some(config => config.responsive);
    const nextProps = {
      ...prevProps,
    };

    const responsiveProps = {} as Props;

    const maxLength = shouldHandleResponsive
      ? Math.max(...props.map(prop => (Array.isArray(prevProps[prop.name]) ? prevProps[prop.name].length : 1)))
      : 0;

    for (const prop of props) {
      if (prop.keep !== true) {
        delete nextProps[prop.name];
      }

      const value = prevProps[prop.name] ?? prop.default;

      responsiveProps[prop.name] = shouldHandleResponsive ? toResponsiveValue(value, maxLength) : value;
    }

    let variantProps;

    if (shouldHandleResponsive) {
      variantProps = Array(maxLength)
        .fill(null)
        .map(
          (_: unknown, index: number) =>
            Object.fromEntries(Object.entries(responsiveProps).map(([key, values]) => [key, values[index]])) as Record<
              keyof Props,
              unknown
            >
        )
        .map(flattenProps => getVariationProps(variants, flattenProps, flattenProps[props[0].name]))
        .reduce((prevProp, currentProp) => {
          for (const key of Object.keys(prevProp)) {
            prevProp[key].push(prevProp[key]);
          }
          for (const key of Object.keys(currentProp)) {
            if (!prevProp[key]) {
              prevProp[key] = [currentProp[key]];
            } else {
              prevProp[key][prevProp[key].length - 1] = currentProp[key];
            }
          }

          return prevProp;
        }, {});
    } else {
      variantProps = getVariationProps(variants, responsiveProps, responsiveProps[props[0].name]);
    }

    return {
      ...nextProps,
      ...variantProps,
    };
  };
