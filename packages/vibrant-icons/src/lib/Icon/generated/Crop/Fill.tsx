import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M21.75 16H18.5V5.75c0-.15-.1-.25-.25-.25H8V2.25C8 2.1 7.9 2 7.75 2h-2c-.15 0-.25.1-.25.25V5.5H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H5.5v10.25c0 .15.1.25.25.25H16v3.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V18.5h3.25c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25ZM8 16V8h8v8H8Z" />
  </Svg>
);
