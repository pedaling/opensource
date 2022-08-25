import { createSystemProp } from '../../createSystemProp';

const overflowProp = createSystemProp({
  property: 'overflow',
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

const alwaysShowScrollProps = createSystemProp({
  property: 'alwaysShowScroll',
  transform: (value: boolean) =>
    value
      ? {
          overflow: 'scroll',
        }
      : {},
});

export const overflowSystemProps = [overflowProp, alwaysShowScrollProps, hideScrollProp];
