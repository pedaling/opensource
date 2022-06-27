import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M20.25 2H3.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25H13.8c.15 0 .25-.05.35-.15l6.2-6.2c.1-.1.15-.2.15-.35V2.25c0-.15-.1-.25-.25-.25ZM8.5 8c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25V8Zm0 4.5v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25Zm5 7v-4.25c0-.15.1-.25.25-.25H18l-4.5 4.5Z" />
  </Svg>
);
