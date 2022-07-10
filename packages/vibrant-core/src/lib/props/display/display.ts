import { createSystemProp } from '../../createSystemProp';

const displayProp = createSystemProp({
  property: 'display',
});

const visibilityProp = createSystemProp({
  property: 'visibility',
});

const opacityProp = createSystemProp({
  property: 'opacity',
});

const hiddenProp = createSystemProp({
  property: 'hidden',
  transform: (hidden: boolean) =>
    hidden
      ? {
          display: 'none',
        }
      : {},
});

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

export const displayProps = [
  displayProp,
  visibilityProp,
  opacityProp,
  hiddenProp,
  overflowXProp,
  overflowYProp,
  hideScrollProp,
];
