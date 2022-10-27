import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12.4 18.95c1.15-.2 2.05-1.25 2.1-2.45 0-1.1-.75-1.8-1.45-2.55-.2-.2-.65-.6-.85-.85-.1-.1-.25-.1-.35 0-.25.2-.65.6-.85.85-.7.7-1.45 1.4-1.45 2.5-.1 1.55 1.25 2.75 2.85 2.5Z" />
    <Svg.Path d="m12 3.35 2.45 2.5.35.35c2.35 2.4 4.4 4.5 4.4 7.55 0 4.1-3.25 7.4-7.25 7.4s-7.2-3.25-7.2-7.3c0-3.1 2.05-5.15 4.4-7.55l.35-.35 2.5-2.6ZM12 1c-.1 0-.15.05-.25.1-1.15 1.2-2.35 2.4-3.5 3.55C5.7 7.3 3 9.85 3 13.85 3 18.9 7.05 23 12 23s9-4.1 9-9.15c0-4-2.7-6.5-5.3-9.15-1.15-1.2-2.35-2.4-3.5-3.55-.05-.1-.1-.15-.2-.15Z" />
  </Svg>
);

Thin.iconType = 'Thin';
