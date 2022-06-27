import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25Zm-18 1.75h4.5v4.5c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25v-4.5Zm6 0h4.5v4.5c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25v-4.5Zm6 0h4.5v4.5c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25v-4.5Zm-2.9 16.5v-4c0-.15-.1-.25-.25-.25h-1.25c-.15 0-.25.1-.25.25v4H3.75v-9c.65.45 1.4.75 2.25.75 1.25 0 2.3-.6 3-1.5.7.9 1.75 1.5 3 1.5s2.3-.6 3-1.5c.7.9 1.75 1.5 3 1.5.85 0 1.6-.3 2.25-.75v9h-7.4Z" />
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25Zm-18 1.75h4.5v4.5c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25v-4.5Zm6 0h4.5v4.5c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25v-4.5Zm6 0h4.5v4.5c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25v-4.5Zm-2.9 16.5v-4c0-.15-.1-.25-.25-.25h-1.25c-.15 0-.25.1-.25.25v4H3.75v-9c.65.45 1.4.75 2.25.75 1.25 0 2.3-.6 3-1.5.7.9 1.75 1.5 3 1.5s2.3-.6 3-1.5c.7.9 1.75 1.5 3 1.5.85 0 1.6-.3 2.25-.75v9h-7.4Z" />
  </Svg>
);
