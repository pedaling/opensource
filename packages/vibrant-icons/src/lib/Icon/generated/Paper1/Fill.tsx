import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M20.25 2H3.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25H13.8c.15 0 .25-.05.35-.15l6.2-6.2c.1-.1.15-.2.15-.35V2.25c0-.15-.1-.25-.25-.25ZM13.5 19.5v-4.25c0-.15.1-.25.25-.25H18l-4.5 4.5Z" />
  </Svg>
);
