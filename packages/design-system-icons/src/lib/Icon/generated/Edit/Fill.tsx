import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m3.3 14.85-.8 5.5c-.1.6.4 1.15 1 1.15h.15l5.5-.8c.1 0 .2-.05.3-.15l8.25-8.25-6-6-8.25 8.25c-.1.1-.15.2-.15.3Zm16.45-4.6a4.255 4.255 0 0 0 0-6 4.16 4.16 0 0 0-3-1.25c-1.1 0-2.15.4-3 1.25l-.7.7 6 6 .7-.7Z" />
  </Svg>
);
