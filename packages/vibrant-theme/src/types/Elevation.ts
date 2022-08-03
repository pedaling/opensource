import type { ThemeMode } from './Mode';

export type Shadow = {
  color?: string;
  offsetX?: number;
  offsetY?: number;
  blurRadius?: number;
  spreadRadius?: number;
};

export type ElevationLevel = 1 | 2 | 3 | 4;

export type Elevation = {
  [key in ElevationLevel]: Shadow[];
};

export type ThemeElevation = {
  [mode in ThemeMode]: Elevation;
};
