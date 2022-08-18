import { createInterpolation } from '../createInterpolation';
import type { SystemProp } from '../createSystemProp';
import { allSystemProps } from '../props';
import { useCurrentTheme } from '../ThemeProvider';

export const useInterpolation = (additionalSystemProps?: SystemProp[]) => {
  const { theme } = useCurrentTheme();

  const interpolation = createInterpolation([...allSystemProps, ...(additionalSystemProps ?? [])])(theme);

  return {
    interpolation,
  };
};
