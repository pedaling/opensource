import { createSystemProp } from '../../createSystemProp';

const colorProp = createSystemProp({
  property: 'color',
  scale: 'colors',
});

const fillProp = createSystemProp({
  property: 'fill',
});

const strokeProp = createSystemProp({
  property: 'stroke',
});

export const colorProps = [colorProp, fillProp, strokeProp];
