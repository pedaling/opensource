import type { Path } from '@vibrant-ui/utils';
import type { ThemeMode } from './Mode';

export type Opacity = {
  overlay: {
    active: number;
    hover: number;
    focus: number;
  };
  text: {
    focus: number;
    active: number;
  };
};

export type OpacityToken = Exclude<Path<Opacity>, 'overlay' | 'text'>;

export type ThemeOpacity = {
  [mode in ThemeMode]: Opacity;
};
