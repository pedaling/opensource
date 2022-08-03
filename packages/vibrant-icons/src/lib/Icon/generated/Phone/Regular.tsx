import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M15.15 22.5c-2.85 0-5-.75-8.45-4.2C.85 12.5-.05 7.5 3.95 3.45l1.9-1.9c.1-.1.25-.1.35 0l5.55 5.55c.1.1.1.25 0 .35L9.2 10l4.75 4.75 2.55-2.55c.1-.1.25-.1.35 0l5.55 5.55c.1.1.1.25 0 .35L20.5 20c-1.6 1.7-3.4 2.5-5.35 2.5ZM6 4.95l-.3.3C4.05 6.9 3.6 8.7 4.35 10.85c.6 1.75 1.95 3.6 4.05 5.75 2.15 2.15 3 2.45 4.75 3.05 2.15.75 3.9.3 5.6-1.35l.3-.3-2.35-2.35-2.55 2.55c-.1.1-.25.1-.35 0l-7.95-8c-.1-.1-.1-.25 0-.35L8.4 7.3 6 4.95Z" />
  </Svg>
);
