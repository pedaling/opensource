import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M21.75 17h-2c-.15 0-.25.1-.25.25v2.25h-15v-2.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v4.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25v-4.5c0-.15-.1-.25-.25-.25ZM4.55 9.7l1.4 1.4c.1.1.25.1.35 0l4.4-4.4v10.05c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V6.7l4.4 4.4c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35l-7.15-7.3c-.1-.1-.25-.1-.35 0L4.55 9.3c-.05.1-.05.3 0 .4Z" />
  </Svg>
);
