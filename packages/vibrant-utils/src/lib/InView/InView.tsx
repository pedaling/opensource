import type { ForwardedRef, FunctionComponentElement } from 'react';
import { cloneElement, useCallback } from 'react';
import { useInView } from '@vibrant-ui/utils';

export type InViewProps = {
  initialInView: boolean;
  onChange: (inView: boolean) => void;
  children: FunctionComponentElement<{ ref?: ForwardedRef<any> }>;
  options?: IntersectionObserverInit;
};

export const InView = ({ initialInView, onChange, children, options }: InViewProps) => {
  const { ref: inViewRef } = useInView({ initialInView, onChange, options });

  const composeRef = useCallback(
    (node: HTMLElement) => {
      if (children.ref) {
        if (typeof children.ref === 'function') {
          children.ref(node);
        } else {
          children.ref.current = node;
        }
      }

      inViewRef(node);
    },
    [children, inViewRef]
  );

  return cloneElement(children, {
    ref: composeRef,
  });
};
