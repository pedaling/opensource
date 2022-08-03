import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12 3.5c.8 0 1.5.7 1.5 1.5v5.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V5c0-.8.7-1.5 1.5-1.5ZM12 1C9.8 1 8 2.8 8 5v5.5c0 2.2 1.8 4 4 4s4-1.8 4-4V5c0-2.2-1.8-4-4-4Z" />
    <Svg.Path d="M12.55 16c-3.2.3-5.9-2.15-6.05-5.25 0-.15-.1-.25-.25-.25h-2c-.1 0-.25.1-.25.25.25 3.8 3 7.05 6.75 7.65v1.1h-2.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h7.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-2.5v-1.1A8.02 8.02 0 0 0 20 10.75c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25-.2 2.7-2.25 4.95-4.95 5.25Z" />
  </Svg>
);
