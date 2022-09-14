import type { ReactElementChild } from '@vibrant-ui/core';

export type SafeAreaProviderProps = {
  children: ReactElementChild;
};

export type Edge = 'bottom' | 'left' | 'right' | 'top';

export type Insets = {
  [edge in Edge]: number;
};

export type GenerateStyle = ({ edges, minInsets }: { edges?: Edge[]; minInsets?: Partial<Insets> }) => {
  [key in 'pb' | 'pl' | 'pr' | 'pt']?: number | string;
};

export type SafeAreaContextValue = {
  insets: Insets;
  generateStyle: GenerateStyle;
};
