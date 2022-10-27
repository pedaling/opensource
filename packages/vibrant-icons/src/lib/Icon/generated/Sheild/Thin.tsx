import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m12 2.9 8.25 3.5c0 2.85-.15 7.15-1.05 9.1-1.1 2.5-4.8 4.6-7.2 5.6-2.35-1-6.1-3.1-7.2-5.6-.85-1.95-1.05-6.25-1.05-9.1L12 2.9ZM12 1h-.1L2.15 5.15C2.1 5.2 2 5.3 2 5.4c0 1.1-.15 7.8 1.2 10.8 1.75 3.95 7.95 6.45 8.75 6.8h.2c.8-.3 7-2.8 8.7-6.8 1.35-3 1.2-9.7 1.15-10.8 0-.1-.05-.2-.15-.2L12.1 1H12Z" />
    <Svg.Path d="m7.45 11.1.9-.9c.1-.1.25-.1.35 0l2.4 2.4 4.3-4.3c.1-.1.25-.1.35 0l.9.9c.1.1.1.25 0 .35l-5.4 5.35c-.1.1-.25.1-.35 0l-3.45-3.45c-.1-.1-.1-.25 0-.35Z" />
  </Svg>
);

Thin.iconType = 'Thin';
