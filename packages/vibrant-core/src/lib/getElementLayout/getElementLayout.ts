import type { TargetElement } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';

export const getElementLayout = async (ref: TargetElement) => {
  const { x, y, width, height } = await getElementRect(ref);

  const top = y;
  const left = x;
  const bottom = window.innerHeight - (y + height);
  const right = window.innerWidth - (x + width);

  return { top, left, bottom, right, width, height };
};
