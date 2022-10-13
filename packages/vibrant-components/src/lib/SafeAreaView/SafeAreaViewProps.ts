import { withVariation } from '@vibrant-ui/core';
import type { BackgroundSystemProps, Edge, MinInsets, ReactElementChild, SizingSystemProps } from '@vibrant-ui/core';

export type SafeAreaViewProps = BackgroundSystemProps &
  SizingSystemProps & {
    children: ReactElementChild;
    mode?: 'margin' | 'padding';
    edges?: Edge[];
    minInsets?: MinInsets;
  };

export const withSafeAreaViewVariation = withVariation<SafeAreaViewProps>('SafeAreaView')();
