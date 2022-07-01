import memoize from '@emotion/memoize';
import { isPropValid } from '../isPropValid';

export const createShouldForwardProp = (props: string[]) => {
  const regex = new RegExp(`^(${props.join('|')})$`);

  return memoize((prop: string) => isPropValid(prop) && !regex.test(prop));
};
