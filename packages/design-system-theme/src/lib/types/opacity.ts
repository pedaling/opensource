import type { ThemeMode } from './mode';

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

export type ThemeOpacity = {
  [mode in ThemeMode]: Opacity;
};
