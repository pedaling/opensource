import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m14.2 19.95 7.75-7.75c.1-.1.1-.25 0-.35l-7.75-7.8c-.1-.1-.25-.1-.35 0L12.4 5.5c-.1.1-.1.25 0 .35l4.9 4.9H7.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H17.3l-4.9 4.9c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.3.1.4.05ZM2 21.75V2.25c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v19.5c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25Z" />
  </Svg>
);
