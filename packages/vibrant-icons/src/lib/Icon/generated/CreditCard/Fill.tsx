import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M1.5 20.25c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25v-8.5h-21v8.5Zm21-16.5c0-.15-.1-.25-.25-.25H1.75c-.15 0-.25.1-.25.25v4.5h21v-4.5Z" />
  </Svg>
);

Fill.iconType = 'Fill';
