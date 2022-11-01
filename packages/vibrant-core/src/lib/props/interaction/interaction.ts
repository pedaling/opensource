import { createSystemProp } from '../../createSystemProp';

const cursorProp = createSystemProp({
  property: 'cursor',
});

const pointerEventsProp = createSystemProp({
  property: 'pointerEvents',
});

export const interactionSystemProps = [cursorProp, pointerEventsProp];
