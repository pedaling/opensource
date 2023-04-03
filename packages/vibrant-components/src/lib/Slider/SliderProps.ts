import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';

export type SliderProps<Data> = {
  data: Data[];
  renderItem: (_: { item: Data; index: number }) => ReactElement | null;
  keyExtractor: (item: Data) => string;
  onEndReached?: () => void;
  onItemImpressed?: (_: { item: Data; index: number }) => void;
  spacing?: ResponsiveValue<number>;
  px?: ResponsiveValue<number>;
  loop?: boolean;
  snap?: boolean;
  initialIndex?: number; // web only
  snapAlignment?: 'center' | 'end' | 'start';
} & Either<
  {
    panelsPerView?: ResponsiveValue<number>;
  },
  {
    panelWidth?: ResponsiveValue<number>;
  }
>;

export const withSliderVariation = withVariation<SliderProps<any>>('Slider')();
