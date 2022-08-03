import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.75 11.1H8.25l5.8-5.8c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0L5.05 11.8c-.1.1-.1.25 0 .35l7.75 7.75c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35l-5.8-5.75h13.5c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.3-.25-.3ZM2 4.25A.25.25 0 0 1 2.25 4H3.5a.25.25 0 0 1 .25.25v15.5a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25V4.25Z" />
  </Svg>
);
