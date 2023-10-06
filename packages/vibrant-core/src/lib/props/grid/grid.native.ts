import { createSystemProp } from '../../createSystemProp';

const gridTemplateColumnsProp = createSystemProp({
  property: 'gridTemplateColumns',
  disabled: true,
});

const gridTemplateRowsProp = createSystemProp({
  property: 'gridTemplateRows',
  disabled: true,
});

const gridColumnProp = createSystemProp({
  property: 'gridColumn',
  disabled: true,
});

const gridRowProp = createSystemProp({
  property: 'gridRow',
  disabled: true,
});

export const gridSystemProps = [gridTemplateColumnsProp, gridTemplateRowsProp, gridColumnProp, gridRowProp];
