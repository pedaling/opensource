import type { FC } from 'react';
import type { SafeAreaContextValue, SafeAreaProviderProps } from './SafeAreaProviderProps';

export const SafeAreaProvider: FC<SafeAreaProviderProps> = ({ children }) => <>{children}</>;

export const useSafeArea = (): SafeAreaContextValue => ({
  insets: {
    top: 'var(--safe-area-inset-top, 0px)',
    left: 'var(--safe-area-inset-left, 0px)',
    right: 'var(--safe-area-inset-right, 0px)',
    bottom: 'var(--safe-area-inset-bottom, 0px)',
  },
});
