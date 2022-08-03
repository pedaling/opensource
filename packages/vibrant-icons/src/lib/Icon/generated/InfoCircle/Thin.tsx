import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M11.1 17.25V10c0-.15.1-.25.25-.25h1.25c.15 0 .25.1.25.25v7.25c0 .15-.1.25-.25.25h-1.25c-.1 0-.25-.1-.25-.25ZM12 8.2A1.1 1.1 0 1 0 12 6a1.1 1.1 0 0 0 0 2.2Z" />
  </Svg>
);
