import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '../Box';
import type { PortalRootContextValue } from './PortalRootProps';
import { withPortalRootVariation } from './PortalRootProps';

const PortalRootContext = createContext<PortalRootContextValue>({
  container: null,
});

export const PortalRoot = withPortalRootVariation(({ children, zIndex }) => {
  const [container, setContainer] = useState<Element | null>(null);
  const viewRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setContainer(viewRef.current ?? document.body);

    const handleFullscreenChange = () => {
      setContainer(document.fullscreenElement ? document.fullscreenElement : viewRef.current ?? document.body);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const contextValue = useMemo(() => ({ container }), [container]);

  return (
    <PortalRootContext.Provider value={contextValue}>
      {children}
      <Box id="portal-root" ref={viewRef} zIndex={zIndex} />
    </PortalRootContext.Provider>
  );
});

export const usePortalRoot = (): PortalRootContextValue => useContext(PortalRootContext);
