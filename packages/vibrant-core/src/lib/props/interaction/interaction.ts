import { createSystemProp } from '../../createSystemProp';

const cursorProp = createSystemProp({
  property: 'cursor',
});

const pointerEventsProp = createSystemProp({
  property: 'pointerEvents',
});

const hitSlopProp = createSystemProp({
  property: 'hitSlop',
  disabled: true,
});

export const interactionSystemProps = [cursorProp, pointerEventsProp, hitSlopProp];
