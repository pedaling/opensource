import type { Elevation } from '../../types/Elevation';

export const darkModeElevation: Elevation = {
  1: [
    { color: '#00000033', blurRadius: 1 },
    { color: '#00000099', offsetY: 2, blurRadius: 6 },
  ],
  2: [
    { color: '#00000033', blurRadius: 1 },
    { color: '#0000008c', offsetY: 4, blurRadius: 12, spreadRadius: 2 },
  ],
  3: [
    { color: '#00000033', blurRadius: 1 },
    { color: '#000000bf', offsetY: 4, blurRadius: 25, spreadRadius: 2 },
  ],
  4: [
    { color: '#00000033', blurRadius: 1 },
    { color: '#000000', offsetY: 16, blurRadius: 40, spreadRadius: 6 },
  ],
};
