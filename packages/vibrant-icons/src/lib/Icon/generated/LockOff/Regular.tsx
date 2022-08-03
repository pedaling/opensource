import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M20.75 9H8.5V7.15c0-1.8 1.35-3.45 3.15-3.6 1.6-.15 3.05.8 3.6 2.2.1.2.25.3.45.3h1.9c.15 0 .3-.15.25-.3-.65-2.9-3.3-5-6.35-4.75C8.35 1.25 6 4 6 7.15V9H3.25C3.1 9 3 9.1 3 9.25v13c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-13c0-.15-.1-.25-.25-.25ZM18.5 20h-13v-8.5h13V20Z" />
    <Svg.Path d="M13.25 17.55c0 .1-.1.2-.25.2h-2c-.15 0-.25-.1-.25-.2v-3.6c0-.1.1-.2.25-.2h2c.15 0 .25.1.25.2v3.6Z" />
  </Svg>
);
