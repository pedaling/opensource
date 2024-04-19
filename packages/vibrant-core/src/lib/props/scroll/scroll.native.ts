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

const scrollPaddingTopProp = createSystemProp({
  property: 'scrollPaddingTop',
  disabled: true,
});

const scrollPaddingLeftProp = createSystemProp({
  property: 'scrollPaddingLeft',
  disabled: true,
});

const scrollPaddingRightProp = createSystemProp({
  property: 'scrollPaddingRight',
  disabled: true,
});

const scrollPaddingBottomProp = createSystemProp({
  property: 'scrollPaddingBottom',
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

export const scrollSystemProps = [
  hideScrollProp,
  horizontalProp,
  scrollSnapProp,
  scrollPaddingTopProp,
  scrollPaddingLeftProp,
  scrollPaddingRightProp,
  scrollPaddingBottomProp,
];
