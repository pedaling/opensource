import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M2 21.75V2.25c0-.15.1-.25.25-.25H3.5c.15 0 .25.1.25.25v19.5c0 .15-.1.25-.25.25H2.25c-.15 0-.25-.1-.25-.25Zm19.9-9.95-7.7-7.75c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l5.8 5.8H7.25c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h11.5l-5.8 5.85c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l7.75-7.75c.1-.1.1-.3-.05-.4Z" />
  </Svg>
);
