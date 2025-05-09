import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'timer-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m22.45 4.15-.75 1c-.1.1-.25.15-.35.05L17.8 2.45c-.1-.1-.15-.25-.05-.35l.75-1c.1-.1.25-.15.35-.05L22.4 3.8c.1.1.15.25.05.35m-20.15 1-.75-1c-.1-.1-.05-.25.05-.35l3.55-2.75c.1-.1.25-.05.35.05l.75 1c.1.1.05.25-.05.35L2.65 5.2c-.1.1-.25.05-.35-.05m10.6 7.55V7.8c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25V13c0 .25.1.5.3.7l3.6 3.6c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35z" />
    <Svg.Path d="M19.65 19.45C21.1 17.7 22 15.45 22 13c0-5.5-4.5-10-10-10S2 7.5 2 13c0 2.45.9 4.7 2.35 6.45l-2 2c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l2-2A9.93 9.93 0 0 0 12 23c2.45 0 4.65-.85 6.4-2.3l2 2c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35zM3.75 13c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25-8.25-3.7-8.25-8.25" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TimerThin';
