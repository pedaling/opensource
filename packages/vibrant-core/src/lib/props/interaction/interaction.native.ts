import { createSystemProp } from '../../createSystemProp';

const cursorProp = createSystemProp({
  property: 'cursor',
  disabled: true,
});

const pointerEventsProp = createSystemProp({
  property: 'pointerEvents',
  transform: value => ({
    props: { pointerEvents: value },
  }),
});

export const interactionSystemProps = [cursorProp, pointerEventsProp];
