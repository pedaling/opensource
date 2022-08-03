import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M10.45 13.25h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25v-8.2c0-.15-.15-.3-.3-.3Zm11.25 0h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25v-8.2c0-.15-.15-.3-.3-.3ZM10.45 2h-8.2C2.1 2 2 2.1 2 2.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3ZM21.7 2h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Z" />
  </Svg>
);
