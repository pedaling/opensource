import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'heart-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.518 13.054A6.7 6.7 0 0 1 .65 8.244a6.7 6.7 0 0 1 2.067-4.728A6.7 6.7 0 0 1 7.376 1.65c1.749 0 3.286.614 4.523 1.73l.1.09.1-.09a6.74 6.74 0 0 1 4.524-1.73c1.68 0 3.404.662 4.657 1.866a6.7 6.7 0 0 1 2.067 4.728 6.7 6.7 0 0 1-1.867 4.81L12 22.785zM7.376 3.35a5 5 0 0 0-3.482 1.392 5.054 5.054 0 0 0-.149 7.136l8.147 8.36.107.11.108-.11 8.157-8.37c1.92-2.003 1.848-5.2-.16-7.126a5 5 0 0 0-3.481-1.392 4.95 4.95 0 0 0-3.385 1.292L12 5.76 10.76 4.642A5.04 5.04 0 0 0 7.376 3.35" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'HeartThin';
