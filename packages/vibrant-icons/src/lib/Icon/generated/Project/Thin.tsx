import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m18.5 8 3.45-5.65c.05-.05.05-.1.05-.1 0-.15-.1-.25-.25-.25H3.25C3.1 2 3 2.1 3 2.25v19.5c0 .15.1.25.25.25H4.5c.15 0 .25-.1.25-.25V14h17c.15 0 .25-.1.25-.25 0-.05 0-.1-.05-.1L18.5 8ZM4.75 12.25v-8.5h14.3l-2.45 4c-.1.15-.1.35 0 .5l2.45 4H4.75Z" />
  </Svg>
);
