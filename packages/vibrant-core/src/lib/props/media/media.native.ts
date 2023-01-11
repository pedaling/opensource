import { createSystemProp } from '../../createSystemProp';

const objectFitProp = createSystemProp({
  property: 'objectFit',
});

const loadingProp = createSystemProp({
  property: 'loading',
});

export const mediaSystemProps = [objectFitProp, loadingProp];
