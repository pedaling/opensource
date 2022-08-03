import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M17.75 3.75V19.2l-5.65-3.1c-.1-.05-.15-.05-.25 0L6.2 19.2V3.75h11.55ZM19.25 2H4.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25.05 0 .1 0 .1-.05L12 18l7.15 3.95c.05 0 .1.05.1.05.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);
