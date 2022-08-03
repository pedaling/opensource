import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M22.75 2H1.25C1.1 2 1 2.1 1 2.25v7c0 .15.1.25.25.25H2v12.25c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V9.5h.75c.15 0 .25-.1.25-.25v-7c0-.15-.1-.25-.25-.25Zm-2.5 18.25H3.75V9.5h16.5v10.75ZM2.75 3.75h18.5v4H2.75v-4Z" />
    <Svg.Path d="M9.5 13.9v-1.25c0-.15.1-.25.25-.25h4.5c.15 0 .25.1.25.25v1.25c0 .15-.1.25-.25.25h-4.5c-.15 0-.25-.15-.25-.25Z" />
  </Svg>
);
