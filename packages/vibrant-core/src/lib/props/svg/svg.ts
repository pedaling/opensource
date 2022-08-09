import { createSystemProp } from '../../createSystemProp';

const fillProp = createSystemProp({
  property: 'fill',
  scale: 'colors',
});

const strokeProp = createSystemProp({
  property: 'stroke',
  scale: 'colors',
});

export const svgSystemProps = [fillProp, strokeProp];
