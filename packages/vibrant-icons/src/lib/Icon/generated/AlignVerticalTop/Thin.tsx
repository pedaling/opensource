import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticaltop-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.75 21.35a.85.85 0 0 1-.85-.85v-14a.85.85 0 0 1 .85-.85h4a.85.85 0 0 1 .85.85v14a.85.85 0 0 1-.85.85zm.85-1.7h2.3V7.35H6.6zm7.65-3.8a.85.85 0 0 1-.85-.85V6.5a.85.85 0 0 1 .85-.85h4a.85.85 0 0 1 .85.85V15a.85.85 0 0 1-.85.85zm.85-1.7h2.3v-6.8h-2.3zM1.15 3.35v-1.2h21.7v1.2z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlignVerticalTopThin';
