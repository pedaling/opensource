import { createSystemProp } from '@vibrant-ui/core';

const xProp = createSystemProp({
  property: 'x',
});

const yProp = createSystemProp({
  property: 'y',
});

export const transformMotionProps = [xProp, yProp];
