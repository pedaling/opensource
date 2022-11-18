import type { RefCallback } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useCallbackRef } from '../useCallbackRef';

export type UseInViewProps = {
  initialInView: boolean;
  onChange?: (inView: boolean) => void;
  options?: IntersectionObserverInit;
};

export type UseInViewResult = {
  ref: RefCallback<any | null>;
  isInView: boolean;
};

export const useInView = ({ initialInView, onChange, options }: UseInViewProps): UseInViewResult => {
  const observerRef = useRef<IntersectionObserver>();
  const [isInView, setIsInView] = useState(initialInView);
  const handleChange = useCallbackRef(onChange);

  const unobserve = useCallback(() => {
    observerRef.current?.disconnect();

    observerRef.current = undefined;
  }, []);

  const ref = useCallback(
    (node: Element | null) => {
      unobserve();

      if (!node) {
        return;
      }

      observerRef.current = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);

        handleChange?.(isInView);
      }, options);

      observerRef.current.observe(node);
    },
    [handleChange, isInView, options, unobserve]
  );

  useEffect(() => unobserve, [unobserve]);

  return { ref, isInView };
};
