import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M4 20.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm12 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm6.75-17.25H6v-3.5c0-.15-.1-.25-.25-.25h-4.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H3.5v13.5c0 .15.1.25.25.25h15.9c.1 0 .2-.1.25-.2l3.1-12c.05-.15-.1-.3-.25-.3Zm-4.85 10H6v-7.5h13.85l-1.95 7.5Z" />
  </Svg>
);
