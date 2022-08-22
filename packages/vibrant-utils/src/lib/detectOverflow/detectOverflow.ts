import type { Rect } from '../../types';

export const detectOverflow = ({
  viewport,
  targetRect,
}: {
  viewport: Pick<Rect, 'height' | 'width'>;
  targetRect: Rect;
}) =>
  targetRect.x < 0 ||
  targetRect.x + targetRect.width > viewport.width ||
  targetRect.y < 0 ||
  targetRect.y + targetRect.height > viewport.height;
