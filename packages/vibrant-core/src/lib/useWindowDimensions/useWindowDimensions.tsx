import { useEffect, useState } from 'react';
import type { WindowDimensions } from './types';

export function getWindowDimensions(): WindowDimensions {
  if (typeof window !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  return {
    width: 0,
    height: 0,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    function handleWindowResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (window) {
      window.addEventListener('resize', handleWindowResize);
    }

    return () => {
      if (window) {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  return windowDimensions;
}
