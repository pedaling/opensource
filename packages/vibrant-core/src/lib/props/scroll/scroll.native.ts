import { createSystemProp } from '../../createSystemProp';

const horizontalProp = createSystemProp({
  property: 'horizontal',
  transform: (value: boolean) => ({
    flexDirection: value ? 'row' : 'column',
    props: {
      horizontal: value,
    },
  }),
});

const scrollSnapProp = createSystemProp({
  property: 'scrollSnap',
  disabled: true,
});

const hideScrollProp = createSystemProp({
  property: 'hideScroll',
  transform: value => ({
    props: {
      showsHorizontalScrollIndicator: !value,
      showsVerticalScrollIndicator: !value,
    },
  }),
});

export const scrollSystemProps = [hideScrollProp, horizontalProp, scrollSnapProp];
