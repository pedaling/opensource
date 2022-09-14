import { useCallback, useEffect, useState } from 'react';
import type { ResponsiveValue } from '../../types';
import { useCurrentTheme } from '../ThemeProvider';

export const useResponsiveValue = ({ rootBreakPoints } = { rootBreakPoints: false }) => {
  const {
    theme: { breakpoints },
  } = useCurrentTheme({ root: rootBreakPoints });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const mediaQueryList = [window.matchMedia(`(max-width: ${breakpoints[0]}px)`)].concat(
      breakpoints.map((breakpoint, index) =>
        window.matchMedia(
          `(min-width: ${breakpoint}px)${
            breakpoints[index + 1] ? ` and (max-width: ${breakpoints[index + 1] - 1}px)` : ''
          }`
        )
      )
    );

    const mediaQueryHandlers = mediaQueryList.map((mediaQuery, index) => {
      const handler = (event: MediaQueryListEvent) => {
        if (event.matches) {
          setCurrentIndex(index);
        }
      };

      if (mediaQuery.matches) {
        setCurrentIndex(index);
      }

      mediaQuery.addListener(handler);

      return handler;
    });

    return () => {
      mediaQueryList.forEach((mediaQuery, index) => mediaQuery.removeListener(mediaQueryHandlers[index]));
    };
  }, [breakpoints]);

  const getResponsiveValue = useCallback(
    (responsiveValue: ResponsiveValue<any>) =>
      Array.isArray(responsiveValue)
        ? responsiveValue[Math.min(currentIndex, responsiveValue.length - 1)]
        : responsiveValue,
    [currentIndex]
  ) as <Value>(responsiveValue: ResponsiveValue<Value>) => Value;

  return { getResponsiveValue, breakpointIndex: currentIndex };
};
