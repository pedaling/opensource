import { createSystemProp } from '../../createSystemProp';

const gridTemplateColumnsProp = createSystemProp({
  property: 'gridTemplateColumns',
  disabled: true,
});

const columnGapProp = createSystemProp({
  property: 'columnGap',
  disabled: true,
});

const rowGapProp = createSystemProp({
  property: 'rowGap',
  disabled: true,
});

const gapProp = createSystemProp({
  property: 'gap',
  disabled: true,
});

export const gridSystemProps = [gridTemplateColumnsProp, columnGapProp, rowGapProp, gapProp];
