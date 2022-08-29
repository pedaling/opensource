import type { FC } from 'react';
import type { SafeAreaContextValue, SafeAreaProviderProps } from './SafeAreaProviderProps';

export const SafeAreaProvider: FC<SafeAreaProviderProps> = ({ children }) => <>{children}</>;

export const useSafeArea = (): SafeAreaContextValue => ({
  insets: {
    top: 'var(--safe-area-inset-top)',
    left: 'var(--safe-area-inset-left)',
    right: 'var(--safe-area-inset-right)',
    bottom: 'var(--safe-area-inset-bottom)',
  },
});
