import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'timer-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.85 1.05c-.1-.1-.25-.05-.35.05l-1.25 1.6c-.1.1-.05.25.05.35l3.55 2.75c.1.1.25.05.35-.05l1.25-1.6c.1-.1.05-.25-.05-.35zM3.15 5.8 6.7 3c.1-.1.15-.25.05-.35L5.5 1.1c-.1-.1-.25-.15-.35-.05L1.6 3.8c-.1.1-.15.25-.05.35l1.25 1.6c.05.1.25.15.35.05M12 3C6.5 3 2 7.5 2 13c0 2.3.8 4.45 2.1 6.15L2.05 21.2c-.05.05-.05.2 0 .3l1.45 1.45c.1.1.25.1.35 0L5.9 20.9C7.55 22.2 9.7 23 12 23s4.45-.8 6.15-2.1l2.05 2.05c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35l-2.05-2.05C21.2 17.45 22 15.3 22 13c0-5.5-4.5-10-10-10m4.55 13.15-1.4 1.4c-.1.1-.25.1-.35 0l-3.7-3.7c-.25-.25-.35-.55-.35-.9V7.8c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v4.7l3.3 3.3c.1.1.1.25 0 .35" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TimerFill';
