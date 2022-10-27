import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M14.25 4h-8V2.35c0-.15-.15-.25-.3-.15L2.1 4.7c-.1.1-.1.25 0 .35l3.85 2.5c.15.1.3 0 .3-.15V5.75h7.8c3.5 0 6.5 2.7 6.7 6.15.2 3.75-2.8 6.85-6.5 6.85h-9c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h9c4.55 0 8.25-3.7 8.25-8.25S18.8 4 14.25 4Z" />
  </Svg>
);

Thin.iconType = 'Thin';
