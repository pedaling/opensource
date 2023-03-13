import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.25 20.25H3.75V3.75h7c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25h-8.5C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25H20.5c-.15 0-.25.1-.25.25v7Z" />
    <Svg.Path d="M21.7 2h-7.95c-.15 0-.25.1-.25.25V3.5c0 .15.1.25.25.25H19l-6.95 6.95c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0L20.25 5v5.25c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Z" />
  </Svg>
);

Thin.iconType = 'Thin';
