import type { WindowDimensions } from '../../types';

export function getWindowDimensions(): WindowDimensions {
  if (typeof window !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  return {
    width: 0,
    height: 0,
  };
}
