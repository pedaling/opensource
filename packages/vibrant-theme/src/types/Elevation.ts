import type { ThemeMode } from './Mode';

export type BoxShadow = {
  color?: string;
  offsetX?: number;
  offsetY?: number;
  blurRadius?: number;
  spreadRadius?: number;
};

export type NativeShadow = {
  color?: string;
  distance?: number;
  offsetX?: number;
  offsetY?: number;
};

export type ElevationLevel = 1 | 2 | 3 | 4;

export type Elevation = {
  [key in ElevationLevel]: { boxShadow: BoxShadow[]; nativeShadow: NativeShadow[] };
};

export type ThemeElevation = {
  [mode in ThemeMode]: Elevation;
};
