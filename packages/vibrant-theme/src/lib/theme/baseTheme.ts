import type { Theme } from '../types';
import { darkModeColors } from './darkModeColors';
import { darkModeOpacity } from './darkModeOpacity';
import { lightModeColors } from './lightModeColors';
import { lightModeOpacity } from './lightModeOpacity';

export const baseTheme: Theme = {
  breakpoints: [640, 1024, 1312],
  colors: {
    light: lightModeColors,
    dark: darkModeColors,
  },
  opacity: {
    light: lightModeOpacity,
    dark: darkModeOpacity,
  },
  mode: 'light',
};
