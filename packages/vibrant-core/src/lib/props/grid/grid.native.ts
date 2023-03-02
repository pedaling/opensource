import { createSystemProp } from '../../createSystemProp';

const gridTemplateColumnsProp = createSystemProp({
  property: 'gridTemplateColumns',
  disabled: true,
});

export const gridSystemProps = [gridTemplateColumnsProp];
