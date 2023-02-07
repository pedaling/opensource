import type { ForwardedRef } from 'react';
import { useCallback } from 'react';

export function useComposedRef(ref1?: ForwardedRef<any> | null, ref2?: ForwardedRef<any>) {
  const composeRef = useCallback(
    (node: HTMLDivElement) => {
      if (ref1) {
        if (typeof ref1 === 'function') {
          ref1(node);
        } else {
          ref1.current = node;
        }
      }

      if (ref2) {
        if (typeof ref2 === 'function') {
          ref2(node);
        } else {
          ref2.current = node;
        }
      }
    },
    [ref1, ref2]
  );

  return composeRef;
}
