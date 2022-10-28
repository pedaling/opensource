import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M22.75 13.25h-4.5c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h4.5c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25Zm-1-6.85-3.9 2.25c-.1.05-.25.05-.35-.1l-1-1.75c-.05-.1-.05-.25.1-.35l3.9-2.2c.1-.05.25-.05.35.1l1 1.75c.1.1.05.25-.1.3Zm0 11.2-3.9-2.25a.264.264 0 0 0-.35.1l-1 1.75c-.05.1-.05.25.1.35l3.9 2.25c.1.05.25.05.35-.1l1-1.75c.1-.15.05-.3-.1-.35Zm-7.5-16.1c-.05 0-.1 0-.15.05L8.15 5.9c-.1.05-.2.1-.3.1h-6.6C1.1 6 1 6.1 1 6.25v11.5c0 .15.1.25.25.25h6.6c.1 0 .2.05.3.1l6 4.35c.05.05.1.05.15.05.15 0 .25-.1.25-.25V1.75c-.05-.15-.15-.25-.3-.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
