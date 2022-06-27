import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m22 12 1.9-1.9c.1-.1.1-.25 0-.35L22.5 8.3c-.1-.1-.25-.1-.35 0l-1.9 1.9-1.9-1.9c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25 0 .35L18.5 12l-1.9 1.9c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0l1.9-1.9 1.9 1.9c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35L22 12ZM14.25 1.5c-.05 0-.1 0-.15.05L8.15 5.9c-.1.05-.2.1-.3.1h-6.6C1.1 6 1 6.1 1 6.25v11.5c0 .15.1.25.25.25h6.6c.1 0 .2.05.3.1l6 4.35c.05.05.1.05.15.05.15 0 .25-.1.25-.25V1.75c-.05-.15-.15-.25-.3-.25Z" />
  </Svg>
);
