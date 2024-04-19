/* eslint-disable @typescript-eslint/naming-convention */
import { createSystemProp } from '../../createSystemProp';

const horizontalProp = createSystemProp({
  property: 'horizontal',
  transform: (value: boolean) => (value ? { flexDirection: 'row' } : { flexDirection: 'column' }),
});

const scrollSnapProp = createSystemProp({
  property: 'scrollSnap',
  styleProperty: 'scrollSnapType',
});

const scrollPaddingTopProp = createSystemProp({
  property: 'scrollPaddingTop',
  styleProperty: 'scrollPaddingTop',
});

const scrollPaddingLeftProp = createSystemProp({
  property: 'scrollPaddingLeft',
  styleProperty: 'scrollPaddingLeft',
});

const scrollPaddingRightProp = createSystemProp({
  property: 'scrollPaddingRight',
  styleProperty: 'scrollPaddingRight',
});

const scrollPaddingBottomProp = createSystemProp({
  property: 'scrollPaddingBottom',
  styleProperty: 'scrollPaddingBottom',
});

const hideScrollProp = createSystemProp({
  property: 'hideScroll',
  transform: (value: boolean) =>
    value
      ? {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }
      : {},
});

export const scrollSystemProps = [
  hideScrollProp,
  horizontalProp,
  scrollSnapProp,
  scrollPaddingTopProp,
  scrollPaddingLeftProp,
  scrollPaddingRightProp,
  scrollPaddingBottomProp,
];
