import type { FC, ReactElement } from 'react';
import { useWindowDimensions as useReactNativeWindowDimensions } from 'react-native';

export const WindowDimensionsProvider: FC<{ children: ReactElement }> = ({ children }) => {

  return (
    children
  );
};

export const useWindowDimensions = () => useReactNativeWindowDimensions();
