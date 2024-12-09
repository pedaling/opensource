import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'calendar-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 4H17.5V2.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V4H9V2.25C9 2.1 8.9 2 8.75 2h-2c-.15 0-.25.1-.25.25V4H2.25C2.1 4 2 4.1 2 4.25v17.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V4.25c0-.15-.1-.25-.25-.25M17.5 16.25c0 .15-.1.25-.25.25h-3.5c-.15 0-.25-.1-.25-.25v-3.5c0-.15.1-.25.25-.25h3.5c.15 0 .25.1.25.25z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'CalendarFill';
