import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M18.25 2.5h-16c-.15 0-.25.1-.25.25v4.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V5H9v14H7.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H13c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-1.5V5H16v2.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-4.5c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M22.7 12.5h-8c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h2.75v6.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V15h2.75c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);
