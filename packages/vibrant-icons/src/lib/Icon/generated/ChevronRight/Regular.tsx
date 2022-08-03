import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M8.905 21.45 7.505 20c-.1-.1-.1-.25 0-.35l7.65-7.65-7.65-7.65c-.1-.1-.1-.25 0-.35l1.4-1.4c.1-.1.25-.1.35-.05l9.25 9.3c.1.1.1.25 0 .35l-9.25 9.25c-.1.05-.25.05-.35 0Z" />
  </Svg>
);
