/* eslint-disable @typescript-eslint/naming-convention */
import { createSystemProp } from '../../createSystemProp';

const overflowProp = createSystemProp({
  property: 'overflow',
});

const horizontalProp = createSystemProp({
  property: 'horizontal',
  transform: (value: boolean) => (value ? { flexDirection: 'row' } : { flexDirection: 'column' }),
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

export const scrollSystemProps = [hideScrollProp, overflowProp, horizontalProp];
