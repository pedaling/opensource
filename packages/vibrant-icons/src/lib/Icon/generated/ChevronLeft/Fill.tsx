import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M15.1 2.55 16.5 4c.1.1.1.25 0 .35L8.85 12l7.65 7.65c.1.1.1.25 0 .35l-1.4 1.4c-.1.1-.25.1-.35 0L5.5 12.15c-.1-.1-.1-.25 0-.35l9.25-9.25c.1-.05.25-.05.35 0Z" />
  </Svg>
);
