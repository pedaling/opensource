import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.25 11.1H12.9V2.75c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25v8.4h-8.4c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h8.4v8.4c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-8.4h8.4c.15 0 .25-.1.25-.25V11.4c-.05-.15-.15-.3-.3-.3Z" />
  </Svg>
);
