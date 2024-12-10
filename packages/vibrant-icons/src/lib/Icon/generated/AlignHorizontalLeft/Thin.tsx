import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalleft-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M1.65 22.35V1.65h1.2v20.7zM6 19.1a.85.85 0 0 1-.85-.85v-4A.85.85 0 0 1 6 13.4h9a.85.85 0 0 1 .85.85v4a.85.85 0 0 1-.85.85zm.85-1.7h7.3v-2.3h-7.3zM6 10.6a.85.85 0 0 1-.85-.85v-4A.85.85 0 0 1 6 4.9h15a.85.85 0 0 1 .85.85v4a.85.85 0 0 1-.85.85zm.85-1.7h13.3V6.6H6.85z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlignHorizontalLeftThin';
