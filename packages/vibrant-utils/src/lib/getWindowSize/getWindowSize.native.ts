import { Dimensions } from 'react-native';

export function getWindowSize() {
  return {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };
}
