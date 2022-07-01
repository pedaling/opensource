import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M17.5 4.5v15h-11v-15h11Zm1-2.5h-13C4.65 2 4 2.65 4 3.5v17c0 .85.65 1.5 1.5 1.5h13c.85 0 1.5-.65 1.5-1.5v-17c0-.85-.65-1.5-1.5-1.5Z" />
    <Svg.Path d="M13.75 18h-3.5c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h3.5c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25Z" />
  </Svg>
);
