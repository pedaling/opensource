import { createSystemProp } from '../../createSystemProp';

const hideScrollProp = createSystemProp({
  property: 'hideScroll',
  transform: value => ({
    props: {
      showsHorizontalScrollIndicator: !value,
      showsVerticalScrollIndicator: !value,
    },
  }),
});

export const scrollSystemProps = [hideScrollProp];
