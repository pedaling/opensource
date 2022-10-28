import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M2.3 22h7.95c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-4l4.15-4.15c.1-.1.1-.25 0-.35L9 13.6c-.1-.1-.25-.1-.35 0L4.5 17.75v-4c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v7.95c0 .2.1.3.3.3ZM21.7 2h-7.95c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h4L13.6 8.65c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0l4.15-4.15v4c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V2.3c0-.2-.1-.3-.3-.3Zm.05 11h-2c-.15 0-.25.1-.25.25v6.25h-6.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h8.5c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25Zm-19.5-2h2c.15 0 .25-.1.25-.25V4.5h6.25c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-8.5C2.1 2 2 2.1 2 2.25v8.5c0 .15.1.25.25.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
