import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m20.2 11.6-7.1 7.1c-1.9 1.9-4.95 2.15-7 .45a5.128 5.128 0 0 1-.35-7.6l7-7c1.1-1.1 2.95-1.3 4.2-.35 1.5 1.15 1.6 3.4.3 4.7l-7 7c-.4.4-1.1.5-1.55.15-.5-.45-.55-1.2-.1-1.65L15.95 7c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0L7.45 13c-1.1 1.1-1.25 2.95-.15 4.1 1.1 1.2 3 1.2 4.15.05l6.9-6.9c1.85-1.85 2.05-4.8.35-6.75-1.85-2.15-5.15-2.2-7.1-.25L4.65 10.2c-2.6 2.6-2.85 6.85-.4 9.6 2.65 2.95 7.2 3 9.95.25l7.2-7.2c.1-.1.1-.25 0-.35l-.9-.9c0-.1-.2-.1-.3 0Z" />
  </Svg>
);
