import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pin-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.9 4.5v4.85c0 .5.1 1 .35 1.4L17 14H7l1.7-3.2c.25-.45.35-.95.35-1.4V4.5zM17.15 2H6.85c-.15 0-.25.1-.25.25v7.1c0 .1 0 .15-.05.25l-3.5 6.5c-.05.05-.05.1-.05.15 0 .15.1.25.25.25h7.5v4.6c0 .1.05.2.1.25l.95 1.55c.05.1.15.1.2.1s.15-.05.2-.1l.95-1.55c.05-.1.1-.15.1-.25v-4.6h7.5c.15 0 .25-.1.25-.25 0-.05 0-.1-.05-.1l-3.5-6.5c-.05-.05-.05-.15-.05-.25V2.25c0-.15-.1-.25-.25-.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PinRegular';
