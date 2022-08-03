import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M20.5 2.5h-17C2.65 2.5 2 3.15 2 4v13h20V4c0-.85-.65-1.5-1.5-1.5Zm2.25 16h-8c-.15 0-.25.1-.25.25 0 .4-.35.75-.75.75h-3.5c-.4 0-.75-.35-.75-.75 0-.15-.1-.25-.25-.25h-8c-.15 0-.25.1-.25.25V20c0 .85.65 1.5 1.5 1.5h19c.85 0 1.5-.65 1.5-1.5v-1.25c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);
