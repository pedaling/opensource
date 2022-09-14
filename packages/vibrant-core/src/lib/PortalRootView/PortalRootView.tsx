import { useEffect, useRef } from 'react';
import { Box } from '../Box';
import { withPortalRootViewVariation } from './PortalRootViewProps';

export const PortalRootView = withPortalRootViewVariation(({ zIndex, onRender }) => {
  const viewRef = useRef<HTMLElement>(null);

  useEffect(() => {
    onRender(viewRef.current ?? document.body);

    const handleFullscreenChange = () => {
      onRender(document.fullscreenElement ? document.fullscreenElement : viewRef.current ?? document.body);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [onRender]);

  return <Box id="portal-root" ref={viewRef} zIndex={zIndex} />;
});
