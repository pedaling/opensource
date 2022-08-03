import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M22.25 7h-5.6V5.65C16.65 3.1 14.55 1 12 1 9.45 1 7.4 3.05 7.4 5.6V7H1.8c-.15 0-.25.15-.25.3l1.8 14.5c0 .1.15.2.25.2h16.85c.15 0 .25-.1.25-.2l1.8-14.5c0-.15-.1-.3-.25-.3ZM9.15 5.65c0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9V7h-5.8V5.65Zm9.95 14.6H4.95L3.5 8.75h17.05l-1.45 11.5Z" />
  </Svg>
);
