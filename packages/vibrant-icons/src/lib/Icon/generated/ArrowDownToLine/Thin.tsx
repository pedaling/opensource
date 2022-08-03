import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m19.95 10.8-.9-.9c-.1-.1-.25-.1-.35 0l-5.8 5.85V2.25c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25v13.5L5.3 9.95c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l7.75 7.75c.1.1.25.1.35 0l7.75-7.75c.15-.1.15-.3.05-.4ZM4 20.5a.25.25 0 0 1 .25-.25h15.5a.25.25 0 0 1 .25.25v1.25a.25.25 0 0 1-.25.25H4.25a.25.25 0 0 1-.25-.25V20.5Z" />
  </Svg>
);
