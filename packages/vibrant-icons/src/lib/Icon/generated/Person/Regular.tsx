import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M15.5 11.9C17 10.8 18 9.05 18 7.1c.05-3.25-2.55-5.95-5.75-6.1C8.8.85 6 3.6 6 7c0 2 1 3.8 2.5 4.9C4.7 13.3 2 16.95 2 21.25v.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-.5c0-4.15 3.35-7.5 7.5-7.5s7.5 3.35 7.5 7.5v.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-.5c0-4.3-2.7-7.95-6.5-9.35ZM12 10.5c-1.95 0-3.5-1.55-3.5-3.5s1.55-3.5 3.5-3.5 3.5 1.55 3.5 3.5-1.55 3.5-3.5 3.5Z" />
  </Svg>
);
