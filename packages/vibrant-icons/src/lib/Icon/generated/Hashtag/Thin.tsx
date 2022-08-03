import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M16.95 9.1h3.15c.1 0 .2-.1.25-.2l.25-1.25c.05-.15-.1-.3-.25-.3H17.3l1-5.1c.05-.1-.05-.25-.2-.25h-1.25c-.1 0-.2.1-.25.2l-1.05 5.15H10.3l1-5.1c.05-.1-.05-.25-.2-.25H9.85c-.1 0-.2.1-.25.2L8.55 7.35H5.4c-.1 0-.2.1-.25.2L4.9 8.8c-.05.15.1.3.25.3H8.2l-1.15 5.75H3.9c-.1 0-.2.1-.25.2L3.4 16.3c-.05.15.1.3.25.3H6.7l-1 5.1c-.05.15.1.3.25.3H7.2c.1 0 .2-.1.25-.2l1.05-5.15h5.2l-1 5.1c-.05.15.1.3.25.3h1.25c.1 0 .2-.1.25-.2l1.05-5.15h3.15c.1 0 .2-.1.25-.2l.25-1.25c.05-.15-.1-.3-.25-.3h-3.05l1.1-5.85Zm-2.9 5.8H8.8l1.15-5.75h5.2l-1.1 5.75Z" />
  </Svg>
);
