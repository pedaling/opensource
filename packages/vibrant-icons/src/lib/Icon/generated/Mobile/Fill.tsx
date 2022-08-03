import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M18.5 2h-13C4.65 2 4 2.65 4 3.5v17c0 .85.65 1.5 1.5 1.5h13c.85 0 1.5-.65 1.5-1.5v-17c0-.85-.65-1.5-1.5-1.5ZM14 17.75c0 .15-.1.25-.25.25h-3.5c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h3.5c.15 0 .25.1.25.25v2Z" />
  </Svg>
);
