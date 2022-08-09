import { createSystemProp } from '../../createSystemProp';

const overflowXProp = createSystemProp({
  property: 'overflowX',
});

const overflowYProp = createSystemProp({
  property: 'overflowY',
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

export const overflowSystemProps = [overflowXProp, overflowYProp, hideScrollProp];
