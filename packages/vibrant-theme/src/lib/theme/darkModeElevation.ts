import type { Elevation } from '../../types/Elevation';

export const darkModeElevation: Elevation = {
  1: {
    boxShadow: [
      { color: '#00000033', blurRadius: 1 },
      { color: '#00000099', offsetY: 2, blurRadius: 6 },
    ],
    nativeShadow: [
      { color: 'rgba(0,0,0,0.2 )', distance: 1 },
      { color: 'rgba(0,0,0,0.2 )', offsetY: 1, distance: 2 },
      { color: 'rgba(0,0,0,0.2)', offsetY: 2, distance: 4 },
    ],
  },
  2: {
    boxShadow: [
      { color: '#00000033', blurRadius: 1 },
      { color: '#0000008c', offsetY: 4, blurRadius: 12, spreadRadius: 2 },
    ],
    nativeShadow: [
      { color: 'rgba(0,0,0,0.2 )', distance: 1 },
      { color: 'rgba(0,0,0,0.2 )', offsetY: 2, distance: 4 },
      { color: 'rgba(0,0,0,0.2 )', offsetY: 3, distance: 8 },
      { color: 'rgba(0,0,0,0.2)', offsetY: 4, distance: 12 },
    ],
  },
  3: {
    boxShadow: [
      { color: '#00000033', blurRadius: 1 },
      { color: '#000000bf', offsetY: 4, blurRadius: 25, spreadRadius: 2 },
    ],
    nativeShadow: [
      { color: 'rgba(0,0,0,0.2 )', distance: 1 },
      { color: 'rgba(0,0,0,0.35 )', offsetY: 4, distance: 4 },
      { color: 'rgba(0,0,0,0.3 )', offsetY: 6, distance: 12 },
      { color: 'rgba(0,0,0,0.25)', offsetY: 8, distance: 18 },
      { color: 'rgba(0,0,0,0.2)', offsetY: 8, distance: 24 },
    ],
  },
  4: {
    boxShadow: [
      { color: '#00000033', blurRadius: 1 },
      { color: '#000000', offsetY: 16, blurRadius: 40, spreadRadius: 6 },
    ],
    nativeShadow: [
      { color: 'rgba(0,0,0,0.2 )', distance: 1 },
      { color: 'rgba(0,0,0,0.4 )', offsetY: 8, distance: 8 },
      { color: 'rgba(0,0,0,0.35 )', offsetY: 14, distance: 18 },
      { color: 'rgba(0,0,0,0.3)', offsetY: 15, distance: 28 },
      { color: 'rgba(0,0,0,0.25)', offsetY: 16, distance: 40 },
      { color: 'rgba(0,0,0,0.2)', offsetY: 18, distance: 48 },
    ],
  },
};
