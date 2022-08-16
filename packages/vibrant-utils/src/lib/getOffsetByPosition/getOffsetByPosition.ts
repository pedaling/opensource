import type { Position, Rect } from '../../types';

export const getOffsetByPosition = ({
  referenceRect,
  targetRect,
  position,
  spacing = 0,
}: {
  referenceRect: Rect;
  targetRect: Rect;
  position: Position;
  spacing?: number;
}) => {
  const [side, alignment] = position.split('-');
  const isVertical = side === 'top' || side === 'bottom';

  const centeredX = (referenceRect.width - targetRect.width) / 2;
  const centeredY = (referenceRect.height - targetRect.height) / 2;

  let offset = { x: 0, y: 0 };

  switch (side) {
    case 'top':
      offset = { x: centeredX, y: -1 * targetRect.height - spacing };
      break;
    case 'bottom':
      offset = { x: centeredX, y: referenceRect.height + spacing };
      break;
    case 'right':
      offset = { x: referenceRect.width + spacing, y: centeredY };
      break;
    case 'left':
      offset = { x: -1 * targetRect.width - spacing, y: centeredY };
      break;
    default:
  }

  switch (alignment) {
    case 'start':
      offset = { ...offset, ...(isVertical ? { x: 0 } : { y: 0 }) };
      break;
    case 'end':
      offset = {
        ...offset,
        ...(isVertical
          ? { x: referenceRect.width - targetRect.width }
          : { y: referenceRect.height - targetRect.height }),
      };
      break;
    default:
  }

  return offset;
};
