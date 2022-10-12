import { useEffect, useMemo, useRef } from 'react';

export function useCallbackRef<CallbackFn extends (...args: any[]) => any>(
  callback: CallbackFn | undefined
): CallbackFn {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as CallbackFn, []);
}
