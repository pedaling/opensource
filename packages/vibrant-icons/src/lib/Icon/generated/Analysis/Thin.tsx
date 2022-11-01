import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.25 2.5H2.75c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25h18.5c.15 0 .25-.1.25-.25V2.75c0-.15-.1-.25-.25-.25Zm-1.5 17.25h-2.9V8.25c0-.15-.1-.25-.2-.25h-1.3c-.1 0-.2.1-.2.25v11.5H12.9v-7.5c0-.15-.1-.25-.2-.25h-1.3c-.1 0-.2.1-.2.25v7.5H8.95v-4.5c0-.15-.1-.25-.2-.25h-1.3c-.1 0-.2.1-.2.25v4.5h-3V4.25h15.5v15.5Z" />
  </Svg>
);

Thin.iconType = 'Thin';
