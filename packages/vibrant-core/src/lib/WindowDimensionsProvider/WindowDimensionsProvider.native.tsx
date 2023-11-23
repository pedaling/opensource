import { createContext, useContext } from 'react';
import type { FC, ReactElement } from 'react';
import { Dimensions, useWindowDimensions as useReactNativeWindowDimensions } from 'react-native';
import type { WindowDimensionsContextValue } from './WindowDimensionsProviderProps';

const initialWindowDimensions = Dimensions.get('window');

const WindowDimensionsContext = createContext<WindowDimensionsContextValue>(initialWindowDimensions);

export const WindowDimensionsProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const windowDimensions = useReactNativeWindowDimensions();

  return <WindowDimensionsContext.Provider value={windowDimensions}>{children}</WindowDimensionsContext.Provider>;
};

export const useWindowDimensions = () => useContext(WindowDimensionsContext);
