import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M17.15 2H6.85c-.15 0-.25.1-.25.25v7.1c0 .1 0 .15-.05.25l-3.5 6.5c-.05.05-.05.1-.05.15 0 .15.1.25.25.25h7.5v4.6c0 .1.05.2.1.25l.95 1.55c.05.1.15.1.2.1.05 0 .15-.05.2-.1l.95-1.55c.05-.1.1-.15.1-.25v-4.6h7.5c.15 0 .25-.1.25-.25 0-.05 0-.1-.05-.1l-3.5-6.5c-.05-.05-.05-.15-.05-.25V2.25c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);
