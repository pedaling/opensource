import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M19.95 12.8 12.2 5.05c-.1-.1-.25-.1-.35 0L4.1 12.8c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l5.8-5.8v13.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V8.25l5.8 5.8c.1.1.25.1.35 0l.9-.9c.1-.05.1-.25 0-.35ZM4 2.25A.25.25 0 0 1 4.25 2h15.5a.25.25 0 0 1 .25.25V3.5a.25.25 0 0 1-.25.25H4.25A.25.25 0 0 1 4 3.5V2.25Z" />
  </Svg>
);
