import { createSystemProp } from '../../createSystemProp';

const objectFitProp = createSystemProp({
  property: 'objectFit',
  transform: value => ({
    props: {
      resizeMode: value === 'fill' ? 'stretch' : value,
    },
  }),
});

export const mediaSystemProps = [objectFitProp];
