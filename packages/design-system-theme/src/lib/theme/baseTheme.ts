import type { Theme } from '../types';
import { darkModeColors } from './darkModeColors';
import { darkModeOpacity } from './darkModeOpacity';
import { lightModeColors } from './lightModeColors';
import { lightModeOpacity } from './lightModeOpacity';

export const baseTheme: Theme = {
  breakpoints: ['640px', '1024px', '1312px'],
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
