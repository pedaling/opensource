import { createSystemProp } from '../../createSystemProp';

const colorProp = createSystemProp({
  property: 'color',
  scale: 'colors',
});

export const colorSystemProps = [colorProp];
