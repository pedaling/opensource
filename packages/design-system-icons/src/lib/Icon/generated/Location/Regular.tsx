import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <Svg.Path d="M12 1c-4.95 0-9 4.1-9 9.15 0 4 2.7 6.5 5.3 9.15 1.15 1.2 2.35 2.4 3.5 3.55.05.05.15.1.2.1.1 0 .15-.05.2-.1 1.15-1.2 2.35-2.4 3.5-3.55 2.6-2.6 5.3-5.15 5.3-9.15C21 5.1 16.95 1 12 1Zm0 18.55c-1.4-1.45-2.8-2.9-4.25-4.3-1.4-1.4-2.25-3.1-2.25-5.1C5.5 6.5 8.4 3.5 12 3.5s6.5 3 6.5 6.65c0 2-.9 3.7-2.25 5.1-1.45 1.45-2.85 2.85-4.25 4.3Z" />
  </Svg>
);
