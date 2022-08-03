import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M19.95 9.8 12.2 2.05c-.1-.1-.25-.1-.35 0L4.1 9.8c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l5.8-5.8v16.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V5.25l5.8 5.8c.1.1.25.1.35 0l.9-.9c.1-.05.1-.25 0-.35Z" />
  </Svg>
);
