import type { RefObject } from 'react';
import { useCallback, useEffect, useRef } from 'react';

type UseEscapeEventResult = {
  ref: RefObject<HTMLElement | undefined>;
};

export const useEscapeEvent = (callback: () => void): UseEscapeEventResult => {
  const ref = useRef<HTMLElement>();

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.code === 'Escape') {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    const currentRef = ref.current;

    currentRef?.addEventListener('keydown', onKeydown);

    return () => currentRef?.removeEventListener('keydown', onKeydown);
  }, [onKeydown]);

  return { ref };
};
