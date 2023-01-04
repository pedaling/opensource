import type { Align, Position, Side } from '../../types';

export const flipPosition = (position: Position, flipAlignment = true) => {
  const [side, alignment] = position.split('-');

  const oppositeSideMap = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  };

  const oppositeAlignment = {
    start: 'end',
    end: 'start',
  };

  return (
    alignment
      ? [
          oppositeSideMap[side as Side],
          flipAlignment ? oppositeAlignment[alignment as Align] : (alignment as Align),
        ].join('-')
      : oppositeSideMap[side as Side]
  ) as Position;
};
