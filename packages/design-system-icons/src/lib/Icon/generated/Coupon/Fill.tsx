import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M22.25 3.5H1.75c-.15 0-.25.1-.25.25v6c0 .15.1.25.25.25 1 .1 1.75.95 1.75 2s-.75 1.85-1.75 2c-.15 0-.25.1-.25.25v6c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25v-6c0-.15-.1-.25-.25-.25-1-.1-1.75-.95-1.75-2s.75-1.85 1.75-2c.15 0 .25-.1.25-.25v-6c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);
