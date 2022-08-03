import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M2.25 13.25h19.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25Zm0-7.25h19.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25Zm0 14.5h19.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25Z" />
  </Svg>
);
