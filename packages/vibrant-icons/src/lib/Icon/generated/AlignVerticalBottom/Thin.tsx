import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticalbottom-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M1.15 21.85v-1.2h21.7v1.2zm13.1-3.5a.85.85 0 0 1-.85-.85V9a.85.85 0 0 1 .85-.85h4a.85.85 0 0 1 .85.85v8.5a.85.85 0 0 1-.85.85zm.85-1.7h2.3v-6.8h-2.3zm-9.35 1.7a.85.85 0 0 1-.85-.85v-14a.85.85 0 0 1 .85-.85h4a.85.85 0 0 1 .85.85v14a.85.85 0 0 1-.85.85zm.85-1.7h2.3V4.35H6.6z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlignVerticalBottomThin';
