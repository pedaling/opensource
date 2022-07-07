import { createSystemProp } from '../../createSystemProp';

const positionProp = createSystemProp({
  property: 'position',
});

const topProp = createSystemProp({
  property: 'top',
});

const rightProp = createSystemProp({
  property: 'right',
});

const bottomProp = createSystemProp({
  property: 'bottom',
});

const leftProp = createSystemProp({
  property: 'left',
});

const zIndexProp = createSystemProp({
  property: 'zIndex',
});

export const positionProps = [positionProp, topProp, rightProp, bottomProp, leftProp, zIndexProp];
