import { useEffect, useState } from 'react';
import type { WindowDimensions } from '../../types';
import { getWindowDimensions } from '../getWindowDimensions';

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    function handleWindowResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (window) {
      window.addEventListener('resize', handleWindowResize, { passive: true });
    }

    return () => {
      if (window) {
        window.removeEventListener('resize', handleWindowResize, { passive: true });
      }
    };
  }, []);

  return windowDimensions;
}
