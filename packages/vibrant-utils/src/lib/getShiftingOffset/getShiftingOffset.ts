import type { Rect } from '../../types';

export const getShiftingOffset = ({
  viewport,
  targetRect,
}: {
  viewport: Pick<Rect, 'height' | 'width'>;
  targetRect: Rect;
}) => {
  const offset = { x: 0, y: 0 };

  if (targetRect.x + targetRect.width > viewport.width) {
    offset.x = viewport.width - (targetRect.x + targetRect.width);
  }

  if (targetRect.x < 0) {
    offset.x = -1 * targetRect.x;
  }

  return offset;
};
