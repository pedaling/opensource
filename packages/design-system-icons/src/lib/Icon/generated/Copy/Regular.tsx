import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M2.25 18H4.5V4.5H18V2.25c0-.15-.1-.25-.25-.25H2.25C2.1 2 2 2.1 2 2.25v15.5c0 .15.1.25.25.25Z" />
    <Svg.Path d="M8.5 19.5v-11h11v11h-11ZM6.3 22h15.45c.15 0 .25-.1.25-.25V6.25c0-.15-.1-.25-.25-.25H6v15.7c0 .15.15.3.3.3Z" />
  </Svg>
);
