import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M15 4H7.1V2.25c0-.2-.2-.3-.35-.2l-4.6 3c-.15.1-.15.3 0 .4l4.6 3c.15.1.35 0 .35-.2V6.5H15c2.5 0 4.5 2 4.5 4.5v1.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V11c0-3.85-3.15-7-7-7ZM9 20h7.9v1.75c0 .2.2.3.35.2l4.6-3c.15-.1.15-.3 0-.4l-4.6-3c-.15-.1-.35 0-.35.2v1.75H9c-2.5 0-4.5-2-4.5-4.5v-1.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V13c0 3.85 3.15 7 7 7Z" />
  </Svg>
);
