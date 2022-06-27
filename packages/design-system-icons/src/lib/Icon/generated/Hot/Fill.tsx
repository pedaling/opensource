import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M15.7 4.65c-1.15-1.2-2.35-2.4-3.5-3.55-.05-.05-.1-.1-.2-.1s-.15.05-.2.1c-1.15 1.2-2.35 2.4-3.5 3.55C5.7 7.3 3 9.85 3 13.85 3 18.9 7.05 23 12 23s9-4.1 9-9.15c0-4-2.7-6.55-5.3-9.2Zm-3.3 14.3c-1.55.25-2.9-.95-2.9-2.45 0-1.1.75-1.8 1.45-2.5.2-.2.65-.6.85-.85.1-.1.25-.1.35 0 .25.2.65.6.85.85.75.75 1.5 1.45 1.45 2.55 0 1.15-.9 2.25-2.05 2.4Z" />
  </Svg>
);
