import type { FC, ReactElement } from 'react';
import { useWindowDimensions as useReactNativeWindowDimensions } from 'react-native';

export const WindowDimensionsProvider: FC<{ children: ReactElement }> = ({ children }) => children;

export const useWindowDimensions = () => useReactNativeWindowDimensions();
