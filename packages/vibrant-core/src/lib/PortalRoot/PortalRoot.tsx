import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '../Box';
import { getElementLayout } from '../getElementLayout';
import { useWindowDimensions } from '../useWindowDimensions';
import type { PortalRootContextValue, Position } from './PortalRootProps';
import { withPortalRootVariation } from './PortalRootProps';

const PortalRootContext = createContext<PortalRootContextValue>({
  container: null,
  position: {},
});

export const PortalRoot = withPortalRootVariation(({ children, zIndex, offset = {} }) => {
  const { width: viewportWidth, height: viewportHeight } = useWindowDimensions();

  const viewRef = useRef<HTMLElement>(null);
  const fullViewRef = useRef<HTMLElement>(null);

  const [container, setContainer] = useState<Element | null>(null);
  const [position, setPosition] = useState<Position>({});

  const contextValue = useMemo(
    () => ({
      container,
      position,
    }),
    [container, position]
  );

  const updatePosition = useCallback(async () => {
    const { top, left, right, bottom, width, height } = await getElementLayout(fullViewRef.current);

    setPosition({
      top: Math.max(top, 0) + (offset.top ?? 0),
      left: Math.max(left, 0) + (offset.left ?? 0),
      right: Math.max(right, 0) + (offset.right ?? 0),
      bottom: Math.max(bottom, 0) + (offset.bottom ?? 0),
      width: Math.min(width, viewportWidth),
      height: Math.min(height, viewportHeight),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(offset), viewportHeight, viewportWidth]);

  useEffect(() => {
    setContainer(viewRef.current ?? document.body);

    const handleFullscreenChange = () => {
      setContainer(document.fullscreenElement ? document.fullscreenElement : viewRef.current ?? document.body);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    updatePosition();

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [updatePosition]);

  return (
    <PortalRootContext.Provider value={contextValue}>
      {children}
      <Box data-id="portal-root" ref={viewRef} zIndex={zIndex} />
      <Box ref={fullViewRef} position="absolute" zIndex={-100} top={0} left={0} right={0} bottom={0} />
    </PortalRootContext.Provider>
  );
});

export const usePortalRoot = (): PortalRootContextValue => useContext(PortalRootContext);
