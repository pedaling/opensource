import type { FC, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import type { VariantFn } from '../propVariant';

type PickRefElement<Props, DefaultElement = HTMLElement> = Props extends { ref?: ForwardedRef<infer Element> }
  ? Element
  : DefaultElement;

type ComponentWithRef<Props, DefaultElement = HTMLElement> = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<PickRefElement<Props, DefaultElement>>
>;

type WithVariationFn<Props> = {
  (): (c: FC<Omit<Props, 'ref'>>) => ComponentWithRef<Props>;
  <V1>(v1: VariantFn<Props, V1>): (c: FC<Omit<V1, 'ref'>>) => ComponentWithRef<Props>;
  <V1, V2>(v1: VariantFn<Props, V1>, v2: VariantFn<V1, V2>): (c: FC<Omit<V2, 'ref'>>) => ComponentWithRef<Props>;
  <V1, V2, V3>(v1: VariantFn<Props, V1>, v2: VariantFn<V1, V2>, v3: VariantFn<V2, V3>): (
    c: FC<Omit<V3, 'ref'>>
  ) => ComponentWithRef<Props>;
  <V1, V2, V3, V4>(v1: VariantFn<Props, V1>, v2: VariantFn<V1, V2>, v3: VariantFn<V2, V3>, v4: VariantFn<V3, V4>): (
    c: FC<Omit<V4, 'ref'>>
  ) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>
  ): (c: FC<Omit<V5, 'ref'>>) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5, V6>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>,
    v6: VariantFn<V5, V6>
  ): (c: FC<Omit<V6, 'ref'>>) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5, V6, V7>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>,
    v6: VariantFn<V5, V6>,
    v7: VariantFn<V6, V7>
  ): (c: FC<Omit<V7, 'ref'>>) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5, V6, V7, V8>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>,
    v6: VariantFn<V5, V6>,
    v7: VariantFn<V6, V7>,
    v8: VariantFn<V7, V8>
  ): (c: FC<Omit<V8, 'ref'>>) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5, V6, V7, V8, V9>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>,
    v6: VariantFn<V5, V6>,
    v7: VariantFn<V6, V7>,
    v8: VariantFn<V7, V8>,
    v9: VariantFn<V8, V9>
  ): (c: FC<Omit<V9, 'ref'>>) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5, V6, V7, V8, V9, V10>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>,
    v6: VariantFn<V5, V6>,
    v7: VariantFn<V6, V7>,
    v8: VariantFn<V7, V8>,
    v9: VariantFn<V8, V9>,
    v10: VariantFn<V9, V10>
  ): (c: FC<Omit<V10, 'ref'>>) => ComponentWithRef<Props>;
};

export function withVariation<Props>(): WithVariationFn<Props> {
  return (...variantFns: VariantFn<Props, any>[]) =>
    (BaseComponent: FC<Omit<Props, 'ref'>>) =>
      forwardRef<PickRefElement<Props>, Props>((props, ref) => {
        const nextProps = variantFns.reduce<Props>((prevProps, variantFn) => variantFn(prevProps), {
          ...props,
        });

        return <BaseComponent {...nextProps} ref={ref} />;
      });
}
