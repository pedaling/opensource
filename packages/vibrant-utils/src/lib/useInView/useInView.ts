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

  useEffect(() => {
    handleChange?.(isInView);
  }, [isInView, handleChange]);

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
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }, options);

      observerRef.current.observe(node);
    },
    [options, unobserve]
  );

  useEffect(() => unobserve, [unobserve]);

  return { ref, isInView };
};
