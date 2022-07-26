import { useCallback, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { useCurrentTheme } from '@vibrant-ui/core';

export const useResponsiveValue = () => {
  const { width } = useWindowDimensions();
  const {
    theme: { breakpoints },
  } = useCurrentTheme();

  const currentIndex = useMemo(() => {
    const index = breakpoints.findIndex(breakpoint => breakpoint >= width);

    if (index === -1) {
      return breakpoints.length + 1;
    }

    return index;
  }, [breakpoints, width]);

  const getResponsiveValue = useCallback(
    (responsiveValue: ResponsiveValue<any>) =>
      Array.isArray(responsiveValue)
        ? responsiveValue[Math.max(currentIndex, responsiveValue.length - 1)]
        : responsiveValue,
    [currentIndex]
  ) as <Value>(responsiveValue: ResponsiveValue<Value>) => Value;

  return { getResponsiveValue, breakpointIndex: currentIndex };
};
