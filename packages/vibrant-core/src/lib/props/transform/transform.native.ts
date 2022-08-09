import { isDefined } from '@vibrant-ui/utils';
import { createSystemProp } from '../../createSystemProp';

const transformProp = createSystemProp({
  property: 'transform',
  transform: value => ({
    transform: Object.keys(value)
      .filter(key => isDefined(value[key]))
      .map(key => ({ [key]: value[key] })),
  }),
});

export const transformSystemProps = [transformProp];
