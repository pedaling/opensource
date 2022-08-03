import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M8.9 17.25V7.5c0-.15.1-.25.25-.25h1.25c.15 0 .25.1.25.25v9.75c0 .15-.1.25-.25.25H9.15c-.15 0-.25-.1-.25-.25Zm4.5 0V7.5c0-.15.1-.25.25-.25h1.25c.15 0 .25.1.25.25v9.75c0 .15-.1.25-.25.25h-1.25c-.15 0-.25-.1-.25-.25ZM20.75 3H12.9V1.25c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25V3h-7.9C3.1 3 3 3.1 3 3.25V4.5c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25V3.25c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="m19.25 6.5-1 13.75H5.8L4.75 6.5c0-.15-.1-.25-.25-.25H3.25c-.15 0-.25.1-.25.25l1.15 15.25c0 .15.1.25.25.25h15.2c.15 0 .25-.1.25-.25L21 6.5c0-.15-.1-.25-.25-.25H19.5c-.15 0-.25.1-.25.25Z" />
  </Svg>
);
