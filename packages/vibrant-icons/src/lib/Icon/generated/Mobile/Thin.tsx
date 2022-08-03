import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M18.25 20.25H5.75V3.75h12.5v16.5ZM18.5 2h-13C4.65 2 4 2.65 4 3.5v17c0 .85.65 1.5 1.5 1.5h13c.85 0 1.5-.65 1.5-1.5v-17c0-.85-.65-1.5-1.5-1.5Z" />
    <Svg.Path d="M13.75 18h-3.5c-.15 0-.25-.1-.25-.25V16.5c0-.15.1-.25.25-.25h3.5c.15 0 .25.1.25.25v1.25c0 .15-.1.25-.25.25Z" />
  </Svg>
);
