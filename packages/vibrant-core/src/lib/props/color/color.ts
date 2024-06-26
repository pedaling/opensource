import { createSystemProp } from '../../createSystemProp';

const colorProp = createSystemProp({
  property: 'color',
  scale: 'colors',
  transform: value => ({
    color: value,
    textFillColor: value,
  }),
});

export const colorSystemProps = [colorProp];
