import { useResponsiveValue } from '../useResponsiveValue';
import type { BuildStyleFn, StyleObject } from './type';

export const useBuildStyle: BuildStyleFn = ({ styleObjects }) => {
  if (styleObjects.length < 2) {
    return styleObjects[0] ?? {};
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { breakpointIndex } = useResponsiveValue();

  const style: StyleObject = styleObjects
    .slice(0, breakpointIndex + 1)
    .reduce((result, styleObject) => ({ ...result, ...styleObject }), {});

  return style;
};
