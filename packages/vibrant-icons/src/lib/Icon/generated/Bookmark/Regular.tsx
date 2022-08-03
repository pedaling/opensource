import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M17 4.5v13.45l-4.9-2.7c-.1-.05-.15-.05-.25 0L7 17.95V4.5h10ZM19.25 2H4.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25.05 0 .1 0 .1-.05L12 18l7.15 3.95c.05 0 .1.05.1.05.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);
