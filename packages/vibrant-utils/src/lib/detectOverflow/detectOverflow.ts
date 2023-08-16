/* eslint-disable @typescript-eslint/naming-convention */
import type { Rect } from '../../types';

export const detectOverflow = ({
  viewport,
  targetRect,
}: {
  viewport: Pick<Rect, 'height' | 'width'>;
  targetRect: Rect;
}) => {
  const top = -targetRect.y;
  const bottom = targetRect.y + targetRect.height - viewport.height;
  const left = -targetRect.x;
  const right = targetRect.x + targetRect.width - viewport.width;

  return {
    top,
    bottom,
    left,
    right,
  };
};
