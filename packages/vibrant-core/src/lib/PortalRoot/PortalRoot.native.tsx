import { createContext, createRef, useContext, useEffect, useMemo, useRef } from 'react';
import { View, findNodeHandle } from 'react-native';
import type { PortalRootContextValue } from './types';
import { withPortalRootVariation } from './types';

const PortalRootContext = createContext<PortalRootContextValue>({
  containerRef: createRef(),
});

export const PortalRoot = withPortalRootVariation(({ children }) => {
  const viewRef = useRef<View>(null);
  const containerRef = useRef<number | null>(null);

  const contextValue = useMemo(() => ({ containerRef }), []);

  useEffect(() => {
    containerRef.current = findNodeHandle(viewRef.current);
  }, []);

  return (
    <>
      <PortalRootContext.Provider value={contextValue}>{children}</PortalRootContext.Provider>
      <View
        ref={viewRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        pointerEvents="box-none"
        collapsable={false}
      />
    </>
  );
});

export const usePortalRoot = (): PortalRootContextValue => useContext(PortalRootContext);
