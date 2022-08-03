import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M20.75 15H19.5V8.5C19.5 4.4 16.1 1 12 1S4.5 4.4 4.5 8.5V15H3.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25ZM7 8.5c0-2.75 2.25-5 5-5s5 2.25 5 5V15H7V8.5ZM12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </Svg>
);
