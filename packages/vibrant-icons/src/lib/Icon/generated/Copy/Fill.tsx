import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M2.25 18H4.5V4.5H18V2.25c0-.15-.1-.25-.25-.25H2.25C2.1 2 2 2.1 2 2.25v15.5c0 .15.1.25.25.25Z" />
    <Svg.Path d="M6.3 22h15.45c.15 0 .25-.1.25-.25V6.25c0-.15-.1-.25-.25-.25H6v15.7c0 .15.15.3.3.3Z" />
  </Svg>
);
