import { createSystemProp } from '../../createSystemProp';

const gridTemplateColumnsProp = createSystemProp({
  property: 'gridTemplateColumns',
});

const columnGapProp = createSystemProp({
  property: 'columnGap',
});

const rowGapProp = createSystemProp({
  property: 'rowGap',
});

const gapProp = createSystemProp({
  property: 'gap',
});

export const gridSystemProps = [gridTemplateColumnsProp, columnGapProp, rowGapProp, gapProp];
