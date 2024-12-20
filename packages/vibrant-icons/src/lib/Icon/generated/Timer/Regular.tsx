import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'timer-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m22.45 4.15-1.25 1.6c-.1.1-.25.15-.35.05L17.3 3c-.1-.1-.15-.25-.05-.35L18.5 1.1c.1-.1.25-.15.35-.05L22.4 3.8c.1.1.15.25.05.35m-20.9 0 1.25 1.6c.1.1.25.15.35.05L6.7 3c.1-.1.15-.25.05-.35L5.5 1.1c-.1-.1-.25-.15-.35-.05L1.6 3.8c-.1.1-.15.25-.05.35m15 11.65-3.3-3.3V7.8c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V13c0 .35.15.65.35.9l3.7 3.7c.1.1.25.1.35 0l1.4-1.4c.1-.15.1-.3 0-.4" />
    <Svg.Path d="M21.95 21.15 19.9 19.1c1.3-1.65 2.1-3.8 2.1-6.1 0-5.5-4.5-10-10-10S2 7.5 2 13c0 2.3.8 4.45 2.1 6.15L2.05 21.2c-.05.05-.05.2 0 .3l1.45 1.45c.1.1.25.1.35 0L5.9 20.9C7.55 22.2 9.7 23 12 23s4.45-.8 6.15-2.1l2.05 2.05c.1.1.25.1.35 0l1.4-1.4c.05-.15.05-.3 0-.4m-9.95-.4c-4.25 0-7.75-3.45-7.75-7.75S7.75 5.25 12 5.25 19.75 8.7 19.75 13s-3.5 7.75-7.75 7.75" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'TimerRegular';
