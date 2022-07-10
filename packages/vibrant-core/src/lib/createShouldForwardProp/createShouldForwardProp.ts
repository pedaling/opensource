import memoize from '@emotion/memoize';

export const createShouldForwardProp = (props: string[]) => {
  const regex = new RegExp(`^(${props.join('|')})$`);

  return memoize((prop: string) => !regex.test(prop));
};
