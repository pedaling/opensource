import type { RefCallback } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export type LayoutEvent = {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export type UseLayoutEventResult = {
  ref: RefCallback<any | null>;
};

export const useLayoutEvent = (callback?: (event: LayoutEvent) => void): UseLayoutEventResult => {
  const observerRef = useRef<ResizeObserver>();

  const handleResize = useCallback(
    ([entry]: ResizeObserverEntry[]) => {
      const { top, left, right, bottom } = entry.contentRect;

      const [width, height] =
        entry.borderBoxSize?.length > 0
          ? [entry.borderBoxSize[0].inlineSize, entry.borderBoxSize[0].blockSize]
          : [entry.contentRect.width, entry.contentRect.height];

      callback?.({
        width,
        height,
        top,
        left,
        right: width - right,
        bottom: height - bottom,
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
