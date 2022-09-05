import { Dimensions } from 'react-native';
import type { TargetElement } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';

export const getElementLayout = async (ref: TargetElement) => {
  const { x, y, width, height } = await getElementRect(ref);
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

  const top = y;
  const left = x;
  const bottom = screenHeight - (y + height);
  const right = screenWidth - (x + width);

  return { top, left, bottom, right, width, height };
};
