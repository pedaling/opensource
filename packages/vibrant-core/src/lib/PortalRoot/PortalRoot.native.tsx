import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { View, findNodeHandle } from 'react-native';
import type { PortalRootContextValue } from './PortalRootProps';
import { withPortalRootVariation } from './PortalRootProps';

const PortalRootContext = createContext<PortalRootContextValue>({
  container: null,
});

export const PortalRoot = withPortalRootVariation(({ children }) => {
  const viewRef = useRef<View>(null);
  const [container, setContainer] = useState<number | null>(null);

  const contextValue = useMemo(() => ({ container }), [container]);

  useEffect(() => {
    setContainer(findNodeHandle(viewRef.current));
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
