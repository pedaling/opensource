import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm2 7.75c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-2Zm-6.5 0c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-2ZM16.4 16l-1.55 1.25c-.1.1-.25.05-.35-.05-.65-.7-1.55-1.1-2.5-1.1s-1.85.4-2.5 1.1c-.1.1-.25.1-.35.05L7.6 16c-.1-.1-.15-.25-.05-.35 1.15-1.25 2.75-2 4.45-2 1.7 0 3.3.7 4.45 2 .1.1.05.25-.05.35Z" />
  </Svg>
);
