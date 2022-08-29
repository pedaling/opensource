import type { ReactElementChild } from '@vibrant-ui/core';

export type SafeAreaProviderProps = {
  children: ReactElementChild;
};

export type Edge = 'bottom' | 'left' | 'right' | 'top';

export type SafeAreaContextValue = {
  insets: Record<Edge, number | string>;
};
