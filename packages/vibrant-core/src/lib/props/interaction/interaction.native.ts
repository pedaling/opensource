import { createSystemProp } from '../../createSystemProp';

const cursorProp = createSystemProp({
  property: 'cursor',
  disabled: true,
});

export const interactionSystemProps = [cursorProp];
