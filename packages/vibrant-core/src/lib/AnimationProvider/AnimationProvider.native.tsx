import type { FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { AnimationProviderProps } from './AnimationProviderProps';

export const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => (
  <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>
);
