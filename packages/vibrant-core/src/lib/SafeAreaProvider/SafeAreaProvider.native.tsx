import type { FC } from 'react';
import { SafeAreaProvider as RNSafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { transformResponsiveValue } from '../transformResponsiveValue';
import type { GenerateStyle, SafeAreaContextValue, SafeAreaProviderProps } from './SafeAreaProviderProps';

export const SafeAreaProvider: FC<SafeAreaProviderProps> = ({ children }) => (
  <RNSafeAreaProvider>{children}</RNSafeAreaProvider>
);

export const useSafeArea = (): SafeAreaContextValue => {
  const insets = useSafeAreaInsets();

  const generateStyle: GenerateStyle = ({
    edges = ['top', 'left', 'right', 'bottom'],
    minInsets = { top: 0, left: 0, right: 0, bottom: 0 },
  }) =>
    edges.reduce(
      (prev, edge) => ({
        ...prev,
        [`p${edge[0]}`]: transformResponsiveValue(minInsets[edge], value => Math.max(insets[edge], value ?? 0)),
      }),
      {}
    );

  return {
    insets,
    generateStyle,
  };
};
