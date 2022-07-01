import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M2.25 18h1.5V3.75H18v-1.5c0-.15-.1-.25-.25-.25H2.25C2.1 2 2 2.1 2 2.25v15.5c0 .15.1.25.25.25Z" />
    <Svg.Path d="M7.25 20.25v-13h13v13h-13ZM5.8 22h15.95c.15 0 .3-.15.3-.3V5.8c0-.15-.15-.3-.3-.3H5.8c-.15 0-.3.15-.3.3v15.95c0 .1.15.25.3.25Z" />
  </Svg>
);
