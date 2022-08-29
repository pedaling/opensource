import type { FC } from 'react';
import { SafeAreaProvider as RNSafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { SafeAreaContextValue, SafeAreaProviderProps } from './SafeAreaProviderProps';

export const SafeAreaProvider: FC<SafeAreaProviderProps> = ({ children }) => (
  <RNSafeAreaProvider>{children}</RNSafeAreaProvider>
);

export const useSafeArea = (): SafeAreaContextValue => {
  const insets = useSafeAreaInsets();

  return {
    insets,
  };
};
