import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m16.95 14.602-4.75-7c-.1-.15-.3-.15-.4 0l-4.75 7c-.1.15 0 .4.2.4h9.5c.2 0 .3-.25.2-.4Z" />
  </Svg>
);
