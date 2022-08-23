import { useMemo } from 'react';
import { createInterpolation } from '../createInterpolation';
import type { SystemProp } from '../createSystemProp';
import { allSystemProps } from '../props';
import { useCurrentTheme } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';

export const useInterpolation = (additionalSystemProps: SystemProp[] = []) => {
  const { theme } = useCurrentTheme();
  const { breakpointIndex } = useResponsiveValue();

  const interpolation = useMemo(
    () => createInterpolation([...allSystemProps, ...additionalSystemProps])({ theme, breakpointIndex }),
    [additionalSystemProps, breakpointIndex, theme]
  );

  return {
    interpolation,
  };
};
