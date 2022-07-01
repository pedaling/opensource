import { createSystemProp } from '../../createSystemProp';

const colorProp = createSystemProp({
  property: 'color',
  scale: 'colors',
});

const fillProp = createSystemProp({
  property: 'fill',
  scale: 'colors',
});

const strokeProp = createSystemProp({
  property: 'stroke',
  scale: 'colors',
});

export const colorProps = [colorProp, fillProp, strokeProp];
