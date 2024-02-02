import { useCallback } from 'react';
import { createInterpolation } from '../createInterpolation';
import { allSystemProps } from '../props';
import { useCurrentTheme } from '../ThemeProvider';

const interpolation = createInterpolation(allSystemProps);

export const useInterpolation = () => {
  const { theme } = useCurrentTheme();

  const useInterpolateStyle = useCallback(
    (style: Record<string, any>) => interpolation({ theme, props: style }),
    [theme]
  );

  return {
    useInterpolateStyle,
  };
};
