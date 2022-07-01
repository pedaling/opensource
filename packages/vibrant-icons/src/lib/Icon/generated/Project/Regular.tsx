import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m18.5 8 3.45-5.65c.05-.05.05-.1.05-.1 0-.15-.1-.25-.25-.25H3.25C3.1 2 3 2.1 3 2.25v19.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V14h16.25c.15 0 .25-.1.25-.25 0-.05 0-.1-.05-.1L18.5 8Zm-2.8.3 1.8 3.2h-12v-7h12l-1.85 3.2c-.1.2-.1.4.05.6Z" />
  </Svg>
);
