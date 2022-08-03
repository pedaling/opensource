import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M22.5 22.25v-11.1c0-.15-.05-.3-.15-.35l-10.2-9.25c-.1-.1-.25-.1-.35 0L1.65 10.8c-.1.1-.15.2-.15.35v11.1c0 .15.1.25.25.25h9v-7.25c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v7.25h9c.15 0 .25-.1.25-.25Z" />
  </Svg>
);
