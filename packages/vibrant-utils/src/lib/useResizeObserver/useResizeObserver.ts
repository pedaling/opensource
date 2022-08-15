import type { RefCallback } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export type UseResizeObserverResult = {
  ref: RefCallback<Element | null>;
};

export const useResizeObserver = (callback?: (entry: ResizeObserverEntry) => void): UseResizeObserverResult => {
  const observerRef = useRef<ResizeObserver>();

  const handleResize = useCallback(
    ([entry]: ResizeObserverEntry[]) => {
      callback?.(entry);
    },
    [callback]
  );

  const observe = useCallback(
    (node: Element | null) => {
      if (!node || !callback) {
        return;
      }

      observerRef.current = new ResizeObserver(handleResize);

      observerRef.current.observe(node);
    },
    [callback, handleResize]
  );

  const unobserve = useCallback(() => {
    observerRef.current?.disconnect();

    observerRef.current = undefined;
  }, []);

  const ref = useCallback(
    (node: Element | null) => {
      unobserve();

      observe(node);
    },
    [observe, unobserve]
  );

  useEffect(() => unobserve, [unobserve]);

  return { ref };
};
