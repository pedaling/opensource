import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v14.5c0 .15.1.25.25.25h8.5v2.5h-3.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h9.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-3.5V17h8.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);
