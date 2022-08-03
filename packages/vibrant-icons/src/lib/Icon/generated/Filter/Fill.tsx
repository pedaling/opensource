import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.75 6.5H11.8C11.3 5.05 9.9 4 8.25 4s-3 1.05-3.55 2.5H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H4.7c.5 1.45 1.9 2.5 3.55 2.5s3-1.05 3.55-2.5h9.95c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25Zm-19.5 11h9.95c.5 1.45 1.9 2.5 3.55 2.5s3-1.05 3.55-2.5h2.45c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H19.3c-.5-1.45-1.9-2.5-3.55-2.5s-3 1.05-3.55 2.5H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25Z" />
  </Svg>
);
