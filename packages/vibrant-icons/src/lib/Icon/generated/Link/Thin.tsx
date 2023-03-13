import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m15.8 9.45-6.35 6.4c-.1.1-.25.1-.3.05l-1-1c-.05-.05-.05-.2.05-.3l6.35-6.35c.1-.1.25-.1.3-.05l1 1c.05.05.05.15-.05.25Z" />
    <Svg.Path d="m11.05 4.15-2.4 2.4c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l2.4-2.4c1.7-1.7 4.45-1.7 6.2 0l.2.2c1.7 1.7 1.7 4.45 0 6.2l-2.4 2.4c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l2.4-2.4c2.4-2.4 2.4-6.3 0-8.65l-.2-.2c-2.45-2.45-6.3-2.45-8.7-.05Zm.7 14.5c-1.7 1.7-4.45 1.7-6.2 0l-.2-.2c-1.7-1.7-1.7-4.45 0-6.2L7.7 9.9c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0L4.1 11c-2.4 2.4-2.4 6.3 0 8.65l.2.2c2.4 2.4 6.3 2.4 8.65 0l2.35-2.35c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0l-2.3 2.4Z" />
  </Svg>
);

Thin.iconType = 'Thin';
