import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelleft-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G clipRule="evenodd" fillRule="evenodd">
      <Svg.Path d="m14.1727 9.00387c-.8698-.34852-1.749-1.11832-2.1287-2.53544-.3797-1.41711-.0032-2.52338.5758-3.26012.8699.34851 1.7491 1.11832 2.1288 2.53543s.0032 2.52339-.5759 3.26013zm.5177 1.93183c-1.5783-.0947-3.5449-1.63834-4.1919-4.05316-.64705-2.41481.2842-4.73489 1.6037-5.60608 1.5783.09473 3.5448 1.63836 4.1919 4.05317.647 2.41481-.2843 4.73487-1.6037 5.60607z" />
      <Svg.Path d="m11.7912 13.5552c-.7844.5127-1.91924.7913-3.29787.2895-1.37862-.5017-2.06887-1.4447-2.34025-2.3416.78441-.5126 1.91929-.7913 3.29791-.2895 1.37861.5018 2.06891 1.4447 2.34021 2.3416zm1.8794.6841c-.9829 1.2385-3.3753 1.964-5.7245 1.109-2.34923-.8551-3.71559-2.9487-3.6724-4.5292.98288-1.23855 3.37529-1.96405 5.72452-1.109 2.34928.8551 3.71558 2.9486 3.67238 4.5292z" />
      <Svg.Path d="m15.75 19.25c-.5618.75-1.5329 1.4-3 1.4s-2.4383-.65-3.00005-1.4c.56175-.75 1.53295-1.4 3.00005-1.4s2.4382.65 3 1.4zm2 0c-.5 1.5-2.5 3-5 3s-4.50005-1.5-5.00005-3c.5-1.5 2.50005-3 5.00005-3s4.5 1.5 5 3z" />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'LaurelLeftThin';
