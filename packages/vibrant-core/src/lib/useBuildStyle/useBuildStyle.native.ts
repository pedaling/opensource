import { useResponsiveValue } from '../useResponsiveValue';
import type { BuildStyleFn } from './type';

export const useBuildStyle: BuildStyleFn = styleObjects => {
  const { breakpointIndex } = useResponsiveValue();

  return styleObjects
    .slice(0, breakpointIndex + 1)
    .reduce((result, styleObject) => ({ ...result, ...styleObject }), {});
};
