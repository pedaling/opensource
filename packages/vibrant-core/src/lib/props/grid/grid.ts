import { createSystemProp } from '../../createSystemProp';

const gridTemplateColumnsProp = createSystemProp({
  property: 'gridTemplateColumns',
});

const gridTemplateRowsProp = createSystemProp({
  property: 'gridTemplateRows',
});

const gridColumnProp = createSystemProp({
  property: 'gridColumn',
});

const gridRowProp = createSystemProp({
  property: 'gridRow',
});

export const gridSystemProps = [gridTemplateColumnsProp, gridTemplateRowsProp, gridColumnProp, gridRowProp];
