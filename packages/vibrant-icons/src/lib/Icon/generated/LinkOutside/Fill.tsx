import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M19.5 19.5h-15v-15h6.25c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-8.5C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v6.25Z" />
    <Svg.Path d="M21.7 2h-7.95c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h4l-5.95 5.95c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0l5.95-5.95v4c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Z" />
  </Svg>
);
