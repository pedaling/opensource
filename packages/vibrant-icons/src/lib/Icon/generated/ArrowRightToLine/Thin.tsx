import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.95 11.8 11.2 4.05c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l5.8 5.8H2.25c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h13.5l-5.8 5.85c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l7.75-7.75c.05-.1.05-.3 0-.4Zm1.3-7.55A.25.25 0 0 1 20.5 4h1.25a.25.25 0 0 1 .25.25v15.5a.25.25 0 0 1-.25.25H20.5a.25.25 0 0 1-.25-.25V4.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
