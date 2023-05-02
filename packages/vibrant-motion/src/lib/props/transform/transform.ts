import { createSystemProp } from '@vibrant-ui/core';

const xProp = createSystemProp({
  property: 'x',
  transform: value => ({
    transform: `translateX(${value}px)`,
  }),
});

const yProp = createSystemProp({
  property: 'y',
  transform: value => ({
    transform: `translateY(${value}px)`,
  }),
});

const rotateProp = createSystemProp({
  property: 'rotate',
  transform: value => ({
    transform: `rotate(${value})`,
  }),
});

export const transformMotionProps = [xProp, yProp, rotateProp];
