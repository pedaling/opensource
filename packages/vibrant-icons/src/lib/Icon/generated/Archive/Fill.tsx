import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M2 9.5v12.25c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V9.5H2Zm12.5 4.75c0 .15-.1.25-.25.25h-4.5c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h4.5c.15 0 .25.1.25.25v2ZM22.75 7c.15 0 .25-.1.25-.25v-4.5c0-.15-.1-.25-.25-.25H1.25C1.1 2 1 2.1 1 2.25v4.5c0 .15.1.25.25.25h21.5Z" />
  </Svg>
);
