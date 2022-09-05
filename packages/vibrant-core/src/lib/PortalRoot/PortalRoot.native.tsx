import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { View, findNodeHandle } from 'react-native';
import { getElementLayout, useWindowDimensions } from '@vibrant-ui/core';
import type { PortalRootContextValue, Position } from './PortalRootProps';
import { withPortalRootVariation } from './PortalRootProps';

const PortalRootContext = createContext<PortalRootContextValue>({
  container: null,
  position: {},
});

export const PortalRoot = withPortalRootVariation(({ children, zIndex, offset = {} }) => {
  const { width: viewportWidth, height: viewportHeight } = useWindowDimensions();

  const viewRef = useRef<View>(null);

  const [container, setContainer] = useState<number | null>(null);
  const [position, setPosition] = useState<Position>({});

  const contextValue = useMemo(
    () => ({
      container,
      position,
    }),
    [container, position]
  );

  const updatePosition = useCallback(async () => {
    const { top, left, right, bottom, width, height } = await getElementLayout(viewRef.current);

    setPosition({
      top,
      left,
      right,
      bottom,
      width: Math.min(width, viewportWidth),
      height: Math.min(height, viewportHeight),
    });
  }, [viewportHeight, viewportWidth]);

  useEffect(() => {
    setContainer(findNodeHandle(viewRef.current));

    updatePosition();
  }, [updatePosition]);

  return (
    <PortalRootContext.Provider value={contextValue}>
      {children}
      <View
        ref={viewRef}
        style={{
          position: 'absolute',
          zIndex,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          ...offset,
        }}
        pointerEvents="box-none"
        collapsable={false}
      />
    </PortalRootContext.Provider>
  );
});

export const usePortalRoot = (): PortalRootContextValue => useContext(PortalRootContext);
