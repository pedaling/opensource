import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { View, findNodeHandle } from 'react-native';
import type { PortalRootContextValue } from './PortalRootProps';
import { withPortalRootVariation } from './PortalRootProps';

const PortalRootContext = createContext<PortalRootContextValue>({
  container: null,
});

export const PortalRoot = withPortalRootVariation(({ children, zIndex }) => {
  const viewRef = useRef<View>(null);
  const [container, setContainer] = useState<number | null>(null);

  const contextValue = useMemo(() => ({ container }), [container]);

  useEffect(() => {
    setContainer(findNodeHandle(viewRef.current));
  }, []);

  return (
    <PortalRootContext.Provider value={contextValue}>
      {children}
      <View
        ref={viewRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex,
        }}
        pointerEvents="box-none"
        collapsable={false}
      />
    </PortalRootContext.Provider>
  );
});

export const usePortalRoot = (): PortalRootContextValue => useContext(PortalRootContext);
