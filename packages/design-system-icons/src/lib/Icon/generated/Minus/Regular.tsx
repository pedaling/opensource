import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M21.25 13.25H2.75c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h18.5c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25Z" />
  </Svg>
);
