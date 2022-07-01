import { createSystemProp } from '../../createSystemProp';

const displayProp = createSystemProp({
  property: 'display',
});

const visibilityProp = createSystemProp({
  property: 'visibility',
});

const opacityProp = createSystemProp({
  property: 'opacity',
});

export const displayProps = [displayProp, visibilityProp, opacityProp];
