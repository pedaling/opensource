import type { DeepWritable } from '@vibrant-ui/utils';
import type { ResponsiveValue, UnResponsiveValue } from '../../types';

export type VariantFn<PrevProps, NextProps> = (props: PrevProps) => NextProps;

type IsNullable<Value> = Value extends undefined ? true : false;

type IsResponsiveValue<Value> = 1 | 2 extends (
  Value extends any[][] ? 1 : Value extends any[] ? 2 : Value extends any ? 1 : false
)
  ? true
  : false;

type BooleanToKey<Prop> = false extends Prop ? 'false' : Prop | true extends Prop ? 'true' : Prop;

type PropConfig<Props, PropKey extends keyof Props> = {
  name: PropKey;
  keep?: boolean;
} & (IsNullable<Props[PropKey]> extends true
  ? {
      default: Props[PropKey];
    }
  : {
      default?: Props[PropKey];
    }) &
  (IsResponsiveValue<Props[PropKey]> extends true
    ? {
        responsive: true;
      }
    : {
        responsive?: false;
      });

export type AnyPropConfig<Props> = {
  [PropKey in keyof Props]-?: PropConfig<Props, PropKey>;
}[keyof Props];

type IncludeResponsiveProp<PropsConfig> = PropsConfig extends [infer First, ...infer Rest]
  ? First extends { responsive: true }
    ? true
    : IncludeResponsiveProp<Rest>
  : false;

export type VariantsReturnProps<PropsConfig, Variants> = Variants extends (args: any) => infer FnResult
  ? VariantsValue<PropsConfig, FnResult>
  : Variants extends infer F
  ? keyof F extends infer K
    ? F extends { [k in K & (number | string | symbol)]: infer O }
      ? VariantsValue<PropsConfig, O>
      : unknown
    : unknown
  : unknown;

export type VariantsValue<PropsConfig, Value> = {
  [key in keyof Value]: Value[key] extends undefined
    ? Value[key]
    : DeepWritable<IncludeResponsiveProp<PropsConfig> extends true ? ResponsiveValue<Value[key]> : Value[key]>;
};

type VariantsFnProps<Props, PropsConfig extends readonly AnyPropConfig<Props>[]> = {
  [K in PropsConfig[number] as K extends { name: infer Name }
    ? Name extends keyof Props
      ? Name
      : never
    : never]: K extends { name: infer Name }
    ? Name extends keyof Props
      ? Exclude<UnResponsiveValue<Props[Name]>, K extends { default: any } ? undefined : never>
      : never
    : never;
};

export type SkipForwards<Props, PropsConfig> = PropsConfig extends [infer First, ...infer Rest]
  ? First extends {
      name: infer P;
    }
    ? First extends { keep: true }
      ? SkipForwards<Props, Rest>
      : Omit<SkipForwards<Props, Rest>, P & (number | string | symbol)>
    : Props
  : Props;

export type VariantsConfig<
  Props,
  PropsConfig extends readonly AnyPropConfig<Props>[],
  VariantsReturn = Record<string, any>
> = PropsConfig extends readonly [infer First, ...infer Rest]
  ? Rest extends [any]
    ? (props: VariantsFnProps<Props, PropsConfig>) => VariantsReturn
    : First extends { name: keyof Props }
    ?
        | Record<BooleanToKey<UnResponsiveValue<Props[First['name']] & (number | string | symbol)>>, VariantsReturn>
        | ((props: VariantsFnProps<Props, PropsConfig>) => VariantsReturn)
    : unknown
  : unknown;
