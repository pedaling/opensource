import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M18.75 3.25a4.16 4.16 0 0 0-3-1.25c-1.1 0-2.15.4-3 1.25l-7.8 7.8c-.1.1-.15.2-.15.3l-.8 5.5c-.1.6.4 1.15 1 1.15h.15l5.5-.8c.1 0 .2-.05.3-.15l7.8-7.8a4.255 4.255 0 0 0 0-6ZM10 15.55l-2.55.35-1.35-1.35.35-2.55L14 4.5c.45-.45 1.1-.75 1.75-.75.65 0 1.3.25 1.75.75.95.95.95 2.55 0 3.55l-7.5 7.5ZM21.75 22H2.25c-.15 0-.25-.1-.25-.25V20.5c0-.15.1-.25.25-.25h19.5c.15 0 .25.1.25.25v1.25c0 .15-.1.25-.25.25Z" />
  </Svg>
);
