import { createSystemProp } from '@vibrant-ui/core';

const xProp = createSystemProp({
  property: 'x',
});

const yProp = createSystemProp({
  property: 'y',
});

const rotateProp = createSystemProp({
  property: 'rotate',
});

export const transformMotionProps = [xProp, yProp, rotateProp];
