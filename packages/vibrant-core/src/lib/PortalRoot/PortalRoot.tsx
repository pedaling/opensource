import { createContext, createRef, useContext, useEffect, useMemo, useRef } from 'react';
import type { PortalRootContextValue } from './types';
import { withPortalRootVariation } from './types';

const PortalRootContext = createContext<PortalRootContextValue>({
  containerRef: createRef(),
});

export const PortalRoot = withPortalRootVariation(({ children }) => {
  const containerRef = useRef<Element | null>(null);

  useEffect(() => {
    containerRef.current = document.body;

    const handleFullscreenChange = () => {
      containerRef.current = document.fullscreenElement ? document.fullscreenElement : document.body;
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const contextValue = useMemo(() => ({ containerRef }), []);

  return <PortalRootContext.Provider value={contextValue}>{children}</PortalRootContext.Provider>;
});

export const usePortalRoot = (): PortalRootContextValue => useContext(PortalRootContext);
