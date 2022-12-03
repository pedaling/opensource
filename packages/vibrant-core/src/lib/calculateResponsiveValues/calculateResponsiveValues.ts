import type { ResponsiveValue, UnResponsiveValue } from '../../types';
import { toResponsiveValue } from '../toResponsiveValue';

type UnResponsiveValues<Values extends Record<string, ResponsiveValue<any>>> = {
  [key in keyof Values]: UnResponsiveValue<Values[key]>;
};

type PickType<Value, Keys extends AllKeys<Value>> = Value extends { [key in Keys]?: any } ? Value[Keys] : undefined;

type AllKeys<Value> = Value extends any ? keyof Value : never;

type MergeObjectToArrayValue<Value extends object> = {
  [key in AllKeys<Value>]: PickType<Value, key>[];
};

export function calculateResponsiveValues<
  Values extends Record<string, ResponsiveValue<any>>,
  Result extends Record<string, any>
>(values: Values, fn: (value: UnResponsiveValues<Values>) => Result): MergeObjectToArrayValue<Result> {
  const maxLength = Math.max(...Object.values(values).map(value => (Array.isArray(value) ? value.length : 1)));

  const responsiveValues = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, toResponsiveValue(value, maxLength)])
  );

  return Array.from({
    length: maxLength,
  })
    .map((_, idx) => {
      const value = Object.fromEntries(
        Object.entries(responsiveValues).map(([key, value]) => [key, value[idx]])
      ) as UnResponsiveValues<Values>;

      return fn(value);
    })
    .reduce(
      (prev: Record<string, any>, value) => ({
        ...prev,
        ...Object.fromEntries(Object.entries(value).map(([key, value]) => [key, [...(prev[key] ?? []), value]])),
      }),
      {}
    ) as MergeObjectToArrayValue<Result>;
}
