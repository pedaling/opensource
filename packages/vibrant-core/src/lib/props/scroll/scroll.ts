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

const snapAlignmentProp = createSystemProp({
  property: 'snapAlignment',
  styleProperty: 'scrollSnapAlign',
});

const scrollSnapStopProp = createSystemProp({
  property: 'scrollSnapStop',
  styleProperty: 'scrollSnapStop',
});

export const scrollSystemProps = [hideScrollProp, horizontalProp, scrollSnapProp];

export const scrollItemSystemProps = [scrollSnapStopProp, snapAlignmentProp];
