import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m10.2 4.05 1.4 1.4c.1.1.1.25 0 .35l-4.9 4.9h15.05c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25H6.7l4.9 4.9c.1.1.1.25 0 .35l-1.4 1.4c-.1.1-.25.1-.35 0l-7.8-7.65c-.1-.1-.1-.25 0-.35l7.75-7.8c.1-.05.3-.05.4 0Z" />
  </Svg>
);
