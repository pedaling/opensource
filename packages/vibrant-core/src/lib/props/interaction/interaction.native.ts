import { createSystemProp } from '../../createSystemProp';

const cursorProp = createSystemProp({
  property: 'cursor',
  disabled: true,
});

const pointerEventsProp = createSystemProp({
  property: 'pointerEvents',
});

export const interactionSystemProps = [cursorProp, pointerEventsProp];
