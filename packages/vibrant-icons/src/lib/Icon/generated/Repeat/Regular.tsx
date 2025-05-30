import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'repeat-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15 4H7.1V2.25c0-.2-.2-.3-.35-.2l-4.6 3c-.15.1-.15.3 0 .4l4.6 3c.15.1.35 0 .35-.2V6.5H15c2.5 0 4.5 2 4.5 4.5v1.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V11c0-3.85-3.15-7-7-7M9 20h7.9v1.75c0 .2.2.3.35.2l4.6-3c.15-.1.15-.3 0-.4l-4.6-3c-.15-.1-.35 0-.35.2v1.75H9c-2.5 0-4.5-2-4.5-4.5v-1.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V13c0 3.85 3.15 7 7 7" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'RepeatRegular';
