import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m13.75 12 6.35-6.35c.1-.1.1-.25 0-.35l-1.4-1.4c-.1-.1-.25-.1-.35 0L12 10.25l-6.35-6.4c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25 0 .35l6.35 6.4-6.4 6.35c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0l6.4-6.35 6.35 6.35c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35L13.75 12Z" />
  </Svg>
);
