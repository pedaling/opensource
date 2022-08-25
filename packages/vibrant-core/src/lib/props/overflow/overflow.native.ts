import { createSystemProp } from '../../createSystemProp';

const overflowProp = createSystemProp({
  property: 'overflow',
});

const hideScrollProp = createSystemProp({
  property: 'hideScroll',
  transform: (value: boolean) =>
    value
      ? {
          props: {
            showsHorizontalScrollIndicator: false,
            showsVerticalScrollIndicator: false,
          },
        }
      : {},
});

const alwaysShowScrollProps = createSystemProp({
  property: 'alwaysShowScroll',
  transform: (value: boolean) =>
    value
      ? {
          props: {
            persistentScrollbar: true,
          },
        }
      : {},
});

export const overflowSystemProps = [overflowProp, alwaysShowScrollProps, hideScrollProp];
