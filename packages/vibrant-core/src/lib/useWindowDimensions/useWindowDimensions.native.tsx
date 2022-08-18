import { Dimensions } from 'react-native';
import type { WindowDimensions } from './types';

export { useWindowDimensions } from 'react-native';

export function getWindowDimensions(): WindowDimensions {
  const { width, height } = Dimensions.get('window');

  return {
    width,
    height,
  };
}
