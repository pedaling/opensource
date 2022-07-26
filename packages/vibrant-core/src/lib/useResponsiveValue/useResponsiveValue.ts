import { useCallback, useEffect, useState } from 'react';
import { useCurrentTheme } from '../ThemeProvider';
import type { ResponsiveValue } from '../types';

export const useResponsiveValue = () => {
  const {
    theme: { breakpoints },
  } = useCurrentTheme();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const mediaQueryList = [window.matchMedia(`(max-width: ${breakpoints[0]}px)`)].concat(
      breakpoints.map((breakpoint, index) =>
        window.matchMedia(
          `(min-width: ${breakpoint}px)${
            breakpoints[index + 1] ? ` and (max-width: ${breakpoints[index + 1] - 1}px)` : ''
          })`
        )
      )
    );

    const mediaQueryHandlers = mediaQueryList.map((mediaQuery, index) => {
      const handler = (event: MediaQueryListEvent) => {
        if (event.matches) {
          setCurrentIndex(index);
        }
      };

      mediaQuery.addEventListener('change', handler);

      return handler;
    });

    return () => {
      mediaQueryList.forEach((mediaQuery, index) =>
        mediaQuery.removeEventListener('change', mediaQueryHandlers[index])
      );
    };
  }, [breakpoints]);

  const getResponsiveValue = useCallback(
    (responsiveValue: ResponsiveValue<any>) =>
      Array.isArray(responsiveValue)
        ? responsiveValue[Math.max(currentIndex, responsiveValue.length - 1)]
        : responsiveValue,
    [currentIndex]
  ) as <Value>(responsiveValue: ResponsiveValue<Value>) => Value;

  return { getResponsiveValue, breakpointIndex: currentIndex };
};
