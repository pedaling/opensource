import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalcenter-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.4 22.35V19.1H7.25a.85.85 0 0 1-.85-.85v-4a.85.85 0 0 1 .85-.85h4.15v-2.8H4a.85.85 0 0 1-.85-.85v-4A.85.85 0 0 1 4 4.9h7.4V1.65h1.2V4.9H20a.85.85 0 0 1 .85.85v4a.85.85 0 0 1-.85.85h-7.4v2.8h4.15a.85.85 0 0 1 .85.85v4a.85.85 0 0 1-.85.85H12.6v3.25zM8.1 17.4h7.8v-2.3H8.1zM4.85 8.9h14.3V6.6H4.85z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlignHorizontalCenterThin';
