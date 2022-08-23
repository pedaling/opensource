import type { BuildStyleFn } from './type';

export const useBuildStyle: BuildStyleFn = ({ styleObjects, breakpointIndex }) =>
  styleObjects.slice(0, breakpointIndex + 1).reduce((result, styleObject) => ({ ...result, ...styleObject }), {});
