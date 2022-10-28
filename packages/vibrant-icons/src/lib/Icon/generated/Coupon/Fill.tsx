import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M22.25 3.5H1.75c-.15 0-.25.1-.25.25v6c0 .15.1.25.25.25 1 .1 1.75.95 1.75 2s-.75 1.85-1.75 2c-.15 0-.25.1-.25.25v6c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25v-6c0-.15-.1-.25-.25-.25-1-.1-1.75-.95-1.75-2s.75-1.85 1.75-2c.15 0 .25-.1.25-.25v-6c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
