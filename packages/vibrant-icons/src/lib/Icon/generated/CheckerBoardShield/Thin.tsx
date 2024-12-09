import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkerboardshield-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M240.06 43.21 83 102.08v177.85c.01.43 1.49 44.18 39 77.83 35.45 31.81 106.94 72.54 118.06 78.79 10.91-6.17 80.26-45.82 117.97-78.82 38.44-33.62 38.98-77.31 38.98-77.74V102.08zm-95.34 289.26c-24.65-22.13-27.47-50.18-27.71-53.29V230h123.02l.02-150.48 1.05.39 121.89 45.73V230H240.02l-.03 167.3-1.53-.89c-19.75-11.66-68.44-41.24-93.75-63.94Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CheckerBoardShieldThin';
