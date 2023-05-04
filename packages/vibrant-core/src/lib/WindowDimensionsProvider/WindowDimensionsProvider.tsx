import type { FC } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactElementChild, WindowDimensions } from '../../types';
import { getWindowDimensions } from '../getWindowDimensions';
import type { WindowDimensionsContextValue } from './WindowDimensionsProviderProps';

const WindowDimensionsContext = createContext<WindowDimensionsContextValue>({
  width: 0,
  height: 0,
});

export const WindowDimensionsProvider: FC<{ children: ReactElementChild }> = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(()=> getWindowDimensions());

  useEffect(() => {
    function handleWindowResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (window) {
      window.addEventListener('resize', handleWindowResize, { passive: true });
    }

    return () => {
      if (window) {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  const contextValue = useMemo(() => windowDimensions, [windowDimensions]);

  return <WindowDimensionsContext.Provider value={contextValue}>{children}</WindowDimensionsContext.Provider>;
};

export const useWindowDimensions = () => useContext(WindowDimensionsContext);
