import { createSystemProp } from 'packages/vibrant-core/src/lib/createSystemProp';

const xProp = createSystemProp({
  property: 'x',
});

const yProp = createSystemProp({
  property: 'y',
});

export const transformMotionProps = [xProp, yProp];
