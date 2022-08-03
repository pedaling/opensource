import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M22.95 13.25h-6.2c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h6.2c-.6-5.1-4.65-9.1-9.7-9.7v6.2c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-6.2c-5.1.6-9.1 4.65-9.7 9.7H7.2c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25H1.05c.55 5.05 4.6 9.1 9.7 9.7v-6.2c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v6.2c5.05-.6 9.1-4.6 9.7-9.7Z" />
  </Svg>
);
