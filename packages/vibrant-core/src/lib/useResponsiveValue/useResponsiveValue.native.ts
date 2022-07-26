import { useCallback, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useCurrentTheme } from '../ThemeProvider';
import type { ResponsiveValue } from '../types';

export const useResponsiveValue = () => {
  const { width } = useWindowDimensions();
  const {
    theme: { breakpoints },
  } = useCurrentTheme();

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
