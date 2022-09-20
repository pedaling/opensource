import type { ReactElementChild, ResponsiveValue } from '../../types';

export type SafeAreaProviderProps = {
  children: ReactElementChild;
};

export type Edge = 'bottom' | 'left' | 'right' | 'top';

export type Insets = {
  [edge in Edge]: number;
};

export type MinInsets = {
  [edge in Edge]?: ResponsiveValue<number>;
};

export type GenerateStyle = ({ edges, minInsets }: { edges?: Edge[]; minInsets?: MinInsets }) => {
  [key in Edge]?: number | string;
};

export type SafeAreaContextValue = {
  insets: Insets;
  generateStyle: GenerateStyle;
};
