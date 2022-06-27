import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M11.25 15.9v3.35h-1.5c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h4.5c.15 0 .25-.1.25-.25V19.5c0-.15-.1-.25-.25-.25h-1.5V14.4l-1.5 1.5Zm10.7-13.1-.7-.7c-.1-.1-.25-.1-.35 0l-.95.95H3.15c-.15 0-.25.1-.25.25v3.5c0 .15.1.25.25.25H4.4c.15 0 .25-.1.25-.25v-2h6.5v7.1l-9 9c-.1.1-.1.25 0 .35l.7.7c.1.1.25.1.35 0l18.75-18.8c.05-.1.05-.25 0-.35Zm-9.35 7.55V4.8h5.6l-5.6 5.55Z" />
  </Svg>
);
