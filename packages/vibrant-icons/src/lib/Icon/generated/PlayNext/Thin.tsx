import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M18.75 3H17.5c-.15 0-.25.1-.25.25v8.1L5.3 3.05C5.25 3 5.25 3 5.2 3c-.1 0-.2.1-.2.2v17.6c0 .1.1.2.2.2.05 0 .05 0 .1-.05l11.95-8.3v8.1c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V3.25c0-.15-.1-.25-.25-.25Zm-12 14.8V6.2L15.1 12l-8.35 5.8Z" />
  </Svg>
);
