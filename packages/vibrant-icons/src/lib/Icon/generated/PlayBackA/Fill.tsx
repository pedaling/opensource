import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playbacka-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-8.5-2c0-2.25.9-4.3 2.3-5.85.1-.1.1-.25 0-.35L4.4 4.4c-.1-.1-.25-.1-.35 0C2.15 6.4 1 9.05 1 12s1.15 5.6 3.05 7.6c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35-1.4-1.55-2.3-3.6-2.3-5.85m16.1-7.6-1.4 1.4c-.1.1-.1.25 0 .35 1.45 1.5 2.3 3.6 2.3 5.85s-.9 4.3-2.3 5.85c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0 1.9-2 3.05-4.65 3.05-7.6s-1.15-5.6-3.05-7.6c-.1-.1-.25-.1-.35 0" />
    <Svg.Path d="M7.6 16.4 9 15c.1-.1.1-.25 0-.35-.65-.7-1-1.65-1-2.65s.4-1.95 1-2.65c.1-.1.1-.25 0-.35L7.6 7.6c-.1-.1-.25-.1-.35 0A6.33 6.33 0 0 0 5.5 12c0 1.7.65 3.25 1.7 4.4.1.1.3.1.4 0M16 12c0 1-.4 1.95-1 2.65-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0 1.05-1.15 1.7-2.7 1.7-4.4s-.65-3.25-1.7-4.4c-.1-.1-.25-.1-.35 0L15 9c-.1.1-.1.25 0 .35.6.7 1 1.65 1 2.65" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PlayBackAFill';
