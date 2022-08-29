import { createContext, createRef, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '../Box';
import type { PortalRootContextValue } from './withPortalRootProps';
import { withPortalRootVariation } from './withPortalRootProps';

const PortalRootContext = createContext<PortalRootContextValue>({
  container: null,
});

export const PortalRoot = withPortalRootVariation(({ children }) => {
  const [container, setContainer] = useState<Element | null>(null);
  const rootBoxRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setContainer(rootBoxRef.current ?? document.body);

    const handleFullscreenChange = () => {
      setContainer(document.fullscreenElement ? document.fullscreenElement : (rootBoxRef.current ?? document.body));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const contextValue = useMemo(() => ({ container }), [container]);

  return <PortalRootContext.Provider value={contextValue}>{children}
    <Box id="portal-root" ref={rootBoxRef} />
  </PortalRootContext.Provider>;
});

export const usePortalRoot = (): PortalRootContextValue => useContext(PortalRootContext);
