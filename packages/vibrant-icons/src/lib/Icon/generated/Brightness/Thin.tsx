import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'brightness-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.75 12.9h-3c-.15 0-.25-.1-.25-.25V11.4c0-.15.1-.25.25-.25h3c.15 0 .25.1.25.25v1.25c0 .1-.1.25-.25.25m-18.5 0h-3c-.15 0-.25-.1-.25-.25V11.4c0-.15.1-.25.25-.25h3c.15 0 .25.1.25.25v1.25c0 .1-.1.25-.25.25m6.85 9.85v-3c0-.15.1-.25.25-.25h1.25c.15 0 .25.1.25.25v3c0 .15-.1.25-.25.25h-1.25c-.1 0-.25-.1-.25-.25m0-18.5v-3c0-.15.1-.25.25-.25h1.25c.15 0 .25.1.25.25v3c0 .15-.1.25-.25.25h-1.25c-.1 0-.25-.1-.25-.25M19 20.2l-2.1-2.1c-.1-.1-.1-.25 0-.35l.9-.9c.1-.1.25-.1.35 0l2.1 2.1c.1.1.1.25 0 .35l-.9.9c-.1.1-.25.1-.35 0M5.9 7.15 3.8 5c-.1-.1-.1-.25 0-.35l.9-.9c.1-.1.25-.1.35 0l2.1 2.1c.1.1.1.25 0 .35l-.9.9c-.1.15-.25.15-.35.05M3.8 19l2.1-2.1c.1-.1.25-.1.35 0l.9.9c.1.1.1.25 0 .35L5 20.2c-.1.1-.25.1-.35 0l-.9-.9c-.05-.05-.05-.2.05-.3M16.85 5.9 19 3.8c.1-.1.25-.1.35 0l.9.9c.1.1.1.25 0 .35l-2.1 2.1c-.1.1-.25.1-.35 0l-.9-.9c-.15-.1-.15-.25-.05-.35M12 7.75c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25S9.65 7.75 12 7.75M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'BrightnessThin';
