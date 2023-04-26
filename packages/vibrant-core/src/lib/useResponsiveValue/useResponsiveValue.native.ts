import { useCallback } from 'react';
import type { ResponsiveValue } from '../../types';
import { useNativeBreakpoint } from '../BreakpointProvider';
import type { UseResponsiveValueProps } from './type';

export const useResponsiveValue = ({ useRootBreakPoints = false }: UseResponsiveValueProps = {}) => {
  const currentIndex = useNativeBreakpoint({ root: useRootBreakPoints });
  const getResponsiveValue = useCallback(
    (responsiveValue: ResponsiveValue<any>) =>
      Array.isArray(responsiveValue)
        ? responsiveValue[Math.min(currentIndex, responsiveValue.length - 1)]
        : responsiveValue,
    [currentIndex]
  ) as <Value>(responsiveValue: ResponsiveValue<Value>) => Value;

  return { getResponsiveValue, breakpointIndex: currentIndex };
};
