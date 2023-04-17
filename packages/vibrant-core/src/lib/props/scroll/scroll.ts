/* eslint-disable @typescript-eslint/naming-convention */
import { createSystemProp } from '../../createSystemProp';

const horizontalProp = createSystemProp({
  property: 'horizontal',
  transform: (value: boolean) => (value ? { flexDirection: 'row' } : { flexDirection: 'column' }),
});

const scrollSnapProp = createSystemProp({
  property: 'scrollSnap',
  transform: (value: boolean) => ({
    scrollSnapType: value ? 'x mandatory' : 'none',
  }),
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

export const scrollSystemProps = [hideScrollProp, horizontalProp, scrollSnapProp];
