import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gift-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 5h-8l2.15-2.15c.1-.1.1-.25.05-.35L14.5 1.05c-.1-.1-.25-.1-.35 0L12 3.25 9.85 1.1c-.1-.1-.25-.1-.35-.05L8.05 2.5c-.1.1-.1.25 0 .35L10.2 5h-8c-.1 0-.2.1-.2.25v16.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V5.25c0-.15-.1-.25-.25-.25m-2.25 7.25h-6.25V7.5h6.25zM10.75 7.5v4.75H4.5V7.5zM4.5 14.75h6.25v4.75H4.5zm8.75 4.75v-4.75h6.25v4.75z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'GiftRegular';
