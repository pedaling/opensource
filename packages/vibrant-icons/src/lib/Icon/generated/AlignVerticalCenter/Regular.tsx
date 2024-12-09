import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticalcenter-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.75 21.1c-.606 0-1.1-.494-1.1-1.1v-7.15H.95v-1.7h3.7V4c0-.607.494-1.1 1.1-1.1h4c.607 0 1.1.493 1.1 1.1v7.15h2.3v-3.9c0-.607.494-1.1 1.1-1.1h4c.607 0 1.1.493 1.1 1.1v3.9h3.8v1.7h-3.8v3.9c0 .606-.493 1.1-1.1 1.1h-4c-.606 0-1.1-.494-1.1-1.1v-3.9h-2.3V20c0 .606-.493 1.1-1.1 1.1zm2.9-2.2V5.1h-1.8v13.8zm8.5-3.25v-7.3h-1.8v7.3z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlignVerticalCenterRegular';
