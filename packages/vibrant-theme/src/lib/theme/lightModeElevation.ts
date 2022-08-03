import type { Elevation } from '../../types/Elevation';

export const lightModeElevation: Elevation = {
  1: [
    { color: '#00000014', blurRadius: 1 },
    { color: '#0000000d', offsetY: 2, blurRadius: 6 },
  ],
  2: [
    { color: '#00000014', blurRadius: 1 },
    { color: '#0000000a', offsetY: 4, blurRadius: 12, spreadRadius: 2 },
  ],
  3: [
    { color: '#00000014', blurRadius: 1 },
    { color: '#0000000f', offsetY: 10, blurRadius: 25, spreadRadius: 4 },
  ],
  4: [
    { color: '#00000014', blurRadius: 1 },
    { color: '#0000001a', offsetY: 16, blurRadius: 30, spreadRadius: 4 },
  ],
};
