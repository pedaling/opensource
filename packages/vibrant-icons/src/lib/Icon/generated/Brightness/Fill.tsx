import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'brightness-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.75 13.25h-3c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h3c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25Zm-18.5 0h-3c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h3c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25Zm6.5 9.5v-3c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v3c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25Zm0-18.5v-3c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v3c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25ZM18.7 20.5l-2.1-2.1c-.1-.1-.1-.25 0-.35l1.4-1.4c.1-.1.25-.1.35 0l2.1 2.1c.1.1.1.25 0 .35l-1.4 1.4c-.1.1-.25.1-.35 0ZM5.65 7.4 3.5 5.3c-.1-.1-.1-.25 0-.35L4.95 3.5c.1-.1.25-.1.35 0l2.1 2.1c.1.1.1.25 0 .35L6 7.4c-.1.1-.25.1-.35 0ZM3.5 18.7l2.1-2.1c.1-.1.25-.1.35 0l1.4 1.4c.1.1.1.25 0 .35L5.3 20.5c-.1.1-.25.1-.35 0L3.5 19.05c-.1-.1-.1-.25 0-.35ZM16.6 5.65l2.1-2.15c.1-.1.25-.1.35 0l1.45 1.45c.1.1.1.25 0 .35l-2.1 2.1c-.1.1-.25.1-.35 0L16.6 6c-.1-.1-.1-.25 0-.35ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'BrightnessFill';
