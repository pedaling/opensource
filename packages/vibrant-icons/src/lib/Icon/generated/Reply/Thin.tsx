import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId = 'reply', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.5 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm9 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-4.5 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    <Svg.Path d="M21.35 17.85C22.4 16.15 23 14.15 23 12c0-6.1-4.9-11-11-11C5.5 1 .35 6.6 1.05 13.25c.55 5.05 4.65 9.15 9.7 9.7 2.6.3 5.05-.35 7.05-1.6.1-.05.2-.1.3-.05l3.1.25c.15 0 .25-.1.25-.25l-.25-3.15c.05-.15.05-.25.15-.3Zm-1.75-.6c-.1.1-.1.2-.1.35l.15 1.85c0 .1-.1.2-.2.2l-1.85-.15c-.1 0-.25 0-.3.1-1.8 1.3-4.1 1.95-6.55 1.6-4.2-.55-7.5-4.05-7.95-8.25C2.25 7.1 7.1 2.25 12.9 2.8c4.4.45 7.95 4.05 8.3 8.45.2 2.25-.45 4.3-1.6 6Z" />
  </Svg>
);

Thin.iconType = 'Thin';
