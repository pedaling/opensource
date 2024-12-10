import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticalcenter-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.75 20.85A.85.85 0 0 1 4.9 20v-7.4H1.2v-1.2h3.7V4a.85.85 0 0 1 .85-.85h4a.85.85 0 0 1 .85.85v7.4h2.8V7.25a.85.85 0 0 1 .85-.85h4a.85.85 0 0 1 .85.85v4.15h3.8v1.2h-3.8v4.15a.85.85 0 0 1-.85.85h-4a.85.85 0 0 1-.85-.85V12.6h-2.8V20a.85.85 0 0 1-.85.85zm.85-1.7h2.3V4.85H6.6zm8.5-3.25h2.3V8.1h-2.3z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlignVerticalCenterThin';
