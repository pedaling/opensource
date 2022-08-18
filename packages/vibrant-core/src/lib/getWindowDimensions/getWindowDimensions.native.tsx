import { Dimensions } from 'react-native';
import type { WindowDimensions } from './types';

export function getWindowDimensions(): WindowDimensions {
  const { width, height } = Dimensions.get('window');

  return {
    width,
    height,
  };
}
