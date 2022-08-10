import memoize from '@emotion/memoize';

export const createShouldForwardProp = <PropNames extends string>(props: string[]) => {
  const regex = new RegExp(`^(${props.join('|')})$`);

  return memoize((prop: string) => !regex.test(prop)) as (prop: string) => prop is PropNames;
};
