import { createSystemProp } from '../../createSystemProp';

const webPositionProp = createSystemProp({
  property: 'web_position',
  disabled: true,
});

export const webSystemProps = [webPositionProp];
