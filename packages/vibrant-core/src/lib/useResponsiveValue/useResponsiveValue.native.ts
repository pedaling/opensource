import { useCallback, useMemo } from 'react';
import type { ResponsiveValue } from '../../types';
import { useCurrentTheme } from '../ThemeProvider';
import { useWindowDimensions } from '../WindowDimensionsProvider';
import type { UseResponsiveValueProps } from './type';

export const useResponsiveValue = ({ useRootBreakPoints = false }: UseResponsiveValueProps = {}) => {
  const { width } = useWindowDimensions();

  const {
    theme: { breakpoints: rootBreakpoint },
  } = useCurrentTheme({ root: true });

  const {
    theme: { breakpoints: currentBreakpoint },
  } = useCurrentTheme({ root: false });

  const breakpointIndex = useMemo(() => {
    const breakpoints = useRootBreakPoints ? rootBreakpoint : currentBreakpoint;

    const index = breakpoints.findIndex(breakpoint => breakpoint >= width);

    return index === -1 ? breakpoints.length : index;
  }, [currentBreakpoint, rootBreakpoint, useRootBreakPoints, width]);

  const getResponsiveValue = useCallback(
    (responsiveValue: ResponsiveValue<any>) =>
      Array.isArray(responsiveValue)
        ? responsiveValue[Math.min(breakpointIndex, responsiveValue.length - 1)]
        : responsiveValue,
    [breakpointIndex]
  ) as <Value>(responsiveValue: ResponsiveValue<Value>) => Value;

  return { getResponsiveValue, breakpointIndex };
};
