import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M20.75 15H19.5V8.5C19.5 4.4 16.1 1 12 1S4.5 4.4 4.5 8.5V15H3.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25ZM12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </Svg>
);
