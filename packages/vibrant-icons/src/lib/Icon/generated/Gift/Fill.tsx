import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M13.25 22h8.5c.15 0 .25-.1.25-.25v-7h-8.75V22Zm-2.5-17h-8.5C2.1 5 2 5.1 2 5.25v7h8.75V5ZM22 12.25v-7c0-.15-.1-.25-.25-.25h-8.5v7.25H22Zm-20 2.5v7c0 .15.1.25.25.25h8.5v-7.25H2Zm13.95-11.9c.05-.1.05-.25 0-.35L14.5 1.05c-.1-.1-.25-.1-.35 0L12 3.25 9.85 1.1c-.1-.1-.25-.1-.35-.05L8.05 2.5c-.1.1-.1.25 0 .35l1.45 1.4h5l1.45-1.4Z" />
  </Svg>
);
