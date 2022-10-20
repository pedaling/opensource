import { createSystemProp } from '../../createSystemProp';

const webPositionProp = createSystemProp({
  property: 'web_position',
  styleProperty: 'position',
});

export const webSystemProps = [webPositionProp];
