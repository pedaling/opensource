import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7.5-13.25V15h1.25c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25h-9l7.75-7.75Zm2.45-6.25L20.5 2.05c-.1-.1-.25-.1-.35 0L18.1 4.1C16.7 2.25 14.5 1 12 1 7.9 1 4.5 4.4 4.5 8.5V15H3.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h1.5L2.1 20.15c-.1.1-.1.25-.05.35l1.45 1.45c.1.1.25.1.35 0l18.1-18.1c.05-.1.05-.25 0-.35Z" />
  </Svg>
);
