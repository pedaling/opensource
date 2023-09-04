import type { Elevation } from '../../types/Elevation';

export const lightModeElevation: Elevation = {
  1: {
    boxShadow: [
      { color: '#00000014', blurRadius: 1 },
      { color: '#0000000d', offsetY: 2, blurRadius: 6 },
    ],
    nativeShadow: [
      { color: 'rgba(0,0,0,0.04 )', distance: 1 },
      { color: 'rgba(0,0,0,0.025)', offsetY: 2, distance: 6 },
    ],
  },
  2: {
    boxShadow: [
      { color: '#00000014', blurRadius: 1 },
      { color: '#0000000a', offsetY: 4, blurRadius: 12, spreadRadius: 2 },
    ],
    nativeShadow: [
      { color: 'rgba(0,0,0,0.04)', distance: 1 },
      { color: 'rgba(0,0,0,0.03)', offsetY: 4, distance: 12 },
    ],
  },
  3: {
    boxShadow: [
      { color: '#00000014', blurRadius: 1 },
      { color: '#0000000f', offsetY: 10, blurRadius: 25, spreadRadius: 4 },
    ],
    nativeShadow: [
      { color: 'rgba(0,0,0,0.04)', distance: 1 },
      { color: 'rgba(0,0,0,0.035)', offsetY: 4, distance: 12 },
      { color: 'rgba(0,0,0,0.03)', offsetY: 8, distance: 16 },
    ],
  },
  4: {
    boxShadow: [
      { color: '#00000014', blurRadius: 1 },
      { color: '#0000001a', offsetY: 16, blurRadius: 30, spreadRadius: 4 },
    ],
    nativeShadow: [
      { color: 'rgba(0,0,0,0.04)', distance: 1 },
      { color: 'rgba(0,0,0,0.05)', offsetY: 12, distance: 20 },
      { color: 'rgba(0,0,0,0.04  )', offsetY: 16, distance: 30 },
    ],
  },
};
