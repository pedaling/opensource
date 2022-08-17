import { useMemo } from 'react';
import { createInterpolation } from '../createInterpolation';
import { allSystemProps } from '../props';
import { useCurrentTheme } from '../ThemeProvider';

export const useInterpolation = () => {
  const { theme } = useCurrentTheme();

  const interpolation = useMemo(() => createInterpolation(allSystemProps)(theme), [theme]);

  return {
    interpolation,
  };
};
