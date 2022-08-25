import { useCallback, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import type { ResponsiveValue } from '../../types';
import { useCurrentTheme } from '../ThemeProvider';

export const useResponsiveValue = ({ rootBreakPoints } = { rootBreakPoints: false }) => {
  const { width } = useWindowDimensions();
  const {
    theme: { breakpoints },
  } = useCurrentTheme({ root: rootBreakPoints });

  const currentIndex = useMemo(() => {
    const index = breakpoints.findIndex(breakpoint => breakpoint >= width);

    if (index === -1) {
      return breakpoints.length;
    }

    return index;
  }, [breakpoints, width]);

  const getResponsiveValue = useCallback(
    (responsiveValue: ResponsiveValue<any>) =>
      Array.isArray(responsiveValue)
        ? responsiveValue[Math.min(currentIndex, responsiveValue.length - 1)]
        : responsiveValue,
    [currentIndex]
  ) as <Value>(responsiveValue: ResponsiveValue<Value>) => Value;

  return { getResponsiveValue, breakpointIndex: currentIndex };
};
