import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M8.75 17.25v-9c0-.15.1-.25.25-.25h1.5c.15 0 .25.1.25.25v9c0 .15-.1.25-.25.25H9c-.15 0-.25-.1-.25-.25Zm4.5 0v-9c0-.15.1-.25.25-.25H15c.15 0 .25.1.25.25v9c0 .15-.1.25-.25.25h-1.5c-.15 0-.25-.1-.25-.25ZM20.75 3h-7.5V1.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V3h-7.5C3.1 3 3 3.1 3 3.25v2c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M17.55 19.5H6.45L5.5 7.25c0-.15-.1-.25-.25-.25h-2C3.1 7 3 7.15 3 7.25l1.15 14.5c0 .15.1.25.25.25h15.2c.15 0 .25-.1.25-.25L21 7.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25l-.95 12.25Z" />
  </Svg>
);
