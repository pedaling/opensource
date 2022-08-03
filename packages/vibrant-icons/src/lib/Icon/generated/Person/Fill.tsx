import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.75 22c.15 0 .25-.1.25-.25v-.5c0-4.3-2.7-7.95-6.5-9.35C17 10.8 18 9.05 18 7.1c.05-3.25-2.55-5.95-5.75-6.1C8.8.85 6 3.6 6 7c0 2 1 3.8 2.5 4.9C4.7 13.3 2 16.95 2 21.25v.5c0 .15.1.25.25.25h19.5Z" />
  </Svg>
);
