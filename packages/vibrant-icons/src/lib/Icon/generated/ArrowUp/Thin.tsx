import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.95 9.8 12.2 2.05c-.1-.1-.25-.1-.35 0L4.1 9.8c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l5.8-5.8v16.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V5.25l5.8 5.8c.1.1.25.1.35 0l.9-.9c.1-.05.1-.25 0-.35Z" />
  </Svg>
);

Thin.iconType = 'Thin';
