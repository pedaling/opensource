import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'calendar-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.25 13.5h-3.5c-.15 0-.25.1-.25.25v3.5c0 .15.1.25.25.25h3.5c.15 0 .25-.1.25-.25v-3.5c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M21.75 4h-4.6V2.25C17.1 2.1 17 2 16.9 2h-1.25c-.15 0-.25.1-.25.25V4H8.6V2.25c0-.15-.1-.25-.2-.25H7.15c-.15 0-.25.1-.25.25V4H2.25C2.1 4 2 4.1 2 4.25v17.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V4.25c0-.15-.1-.25-.25-.25Zm-1.5 16.25H3.75V5.75h3.1V7.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V5.75h6.75V7.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V5.75h3.1v14.5h.05Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CalendarThin';
