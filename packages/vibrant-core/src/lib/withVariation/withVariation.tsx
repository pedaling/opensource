import type { FC, ForwardRefExoticComponent, PropsWithoutRef, Ref, RefAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantFn } from '../propVariant';

type PickRefElement<Props, DefaultElement = HTMLElement> = Props extends {
  ref?: Ref<infer Element>;
}
  ? Element
  : DefaultElement;

export type ComponentWithRef<Props, DefaultElement = HTMLElement> = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<PickRefElement<Props, DefaultElement>>
>;

type WithInnerRef<Props> = Props extends { ref?: infer RefValue }
  ? Omit<Props, 'ref'> & { innerRef?: RefValue }
  : Props;

type ComponentWithInnerRef<Props> = FC<WithInnerRef<Props>>;

type WithVariationFn<Props> = {
  (): (c: ComponentWithInnerRef<Props>) => ComponentWithRef<Props>;
  <V1>(v1: VariantFn<Props, V1>): (c: ComponentWithInnerRef<V1>) => ComponentWithRef<Props>;
  <V1, V2>(v1: VariantFn<Props, V1>, v2: VariantFn<V1, V2>): (c: ComponentWithInnerRef<V2>) => ComponentWithRef<Props>;
  <V1, V2, V3>(v1: VariantFn<Props, V1>, v2: VariantFn<V1, V2>, v3: VariantFn<V2, V3>): (
    c: ComponentWithInnerRef<V3>
  ) => ComponentWithRef<Props>;
  <V1, V2, V3, V4>(v1: VariantFn<Props, V1>, v2: VariantFn<V1, V2>, v3: VariantFn<V2, V3>, v4: VariantFn<V3, V4>): (
    c: ComponentWithInnerRef<V4>
  ) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>
  ): (c: ComponentWithInnerRef<V5>) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5, V6>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>,
    v6: VariantFn<V5, V6>
  ): (c: ComponentWithInnerRef<V6>) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5, V6, V7>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>,
    v6: VariantFn<V5, V6>,
    v7: VariantFn<V6, V7>
  ): (c: ComponentWithInnerRef<V7>) => ComponentWithRef<Props>;
  <V1, V2, V3, V4, V5, V6, V7, V8>(
    v1: VariantFn<Props, V1>,
    v2: VariantFn<V1, V2>,
    v3: VariantFn<V2, V3>,
    v4: VariantFn<V3, V4>,
    v5: VariantFn<V4, V5>,
    v6: VariantFn<V5, V6>,
    v7: VariantFn<V6, V7>,
    v8: VariantFn<V7, V8>
  ): (c: ComponentWithInnerRef<V8>) => ComponentWithRef<Props>;
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
  ): (c: ComponentWithInnerRef<V9>) => ComponentWithRef<Props>;
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
  ): (c: ComponentWithInnerRef<V10>) => ComponentWithRef<Props>;
};

export function withVariation<Props>(componentName: string): WithVariationFn<Props> {
  return (...variantFns: VariantFn<Props, any>[]) =>
    (BaseComponent: ComponentWithInnerRef<Props>) =>
      Object.assign(
        forwardRef<PickRefElement<Props>, Props>((props, ref) => {
          const nextProps = variantFns.reduce<Props>((prevProps, variantFn) => variantFn(prevProps), {
            ...props,
          });

          return <BaseComponent {...(nextProps as any)} {...((ref ? { innerRef: ref } : {}) as WithInnerRef<Props>)} />;
        }),
        { displayName: componentName }
      );
}
