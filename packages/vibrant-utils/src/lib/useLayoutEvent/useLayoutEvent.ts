import type { RefCallback } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export type LayoutEvent = { layout: { width: number; height: number; x: number; y: number }; target?: Element };

export type UseLayoutEventResult = {
  ref: RefCallback<Element | null>;
};

export const useLayoutEvent = (callback?: (event: LayoutEvent) => void): UseLayoutEventResult => {
  const observerRef = useRef<ResizeObserver>();

  const handleResize = useCallback(
    ([entry]: ResizeObserverEntry[]) => {
      const [width, height] =
        entry.borderBoxSize?.length > 0
          ? [entry.borderBoxSize[0].inlineSize, entry.borderBoxSize[0].blockSize]
          : [entry.contentRect.width, entry.contentRect.height];

      callback?.({
        layout: {
          ...entry.contentRect,
          width,
          height,
        },
        target: entry.target,
      });
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
