import { createSystemProp } from '../../createSystemProp';

const hideScrollProp = createSystemProp({
  property: 'hideScroll',
  transform: () => ({
    props: {
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
    },
  }),
});

export const scrollSystemProps = [hideScrollProp];
