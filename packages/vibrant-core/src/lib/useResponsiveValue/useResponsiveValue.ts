import { useCallback, useEffect, useState } from 'react';
import type { ResponsiveValue } from '../../types';
import { useCurrentTheme } from '../ThemeProvider';
import type { UseResponsiveValueProps } from './type';

export const useResponsiveValue = ({ useRootBreakPoints = false, disabled = false }: UseResponsiveValueProps = {}) => {
  const {
    theme: { breakpoints },
  } = useCurrentTheme({ root: useRootBreakPoints });

  const [currentIndex, setCurrentIndex] = useState(0);

  const getResponsiveValue = useCallback(
    (responsiveValue: ResponsiveValue<any>) =>
      Array.isArray(responsiveValue)
        ? responsiveValue[Math.min(currentIndex, responsiveValue.length - 1)]
        : responsiveValue,
    [currentIndex]
  ) as <Value>(responsiveValue: ResponsiveValue<Value>) => Value;

  useEffect(() => {
    if (disabled) {
      return;
    }

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
  }, [breakpoints, disabled]);

  return {
    getResponsiveValue,
    breakpointIndex: currentIndex,
  };
};
