import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 7.9c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C4.54 1.5 5.66 1.5 7.9 1.5h8.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v8.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436H7.9c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C1.5 19.46 1.5 18.34 1.5 16.1V7.9Zm9.664 9 7.56-7.6a.24.24 0 0 0 0-.35l-1.401-1.4c-.1-.1-.25-.1-.35 0l-6.01 6-3.605-3.6c-.1-.1-.25-.1-.35 0l-1.402 1.4c-.1.1-.1.25 0 .35l5.207 5.2c.1.1.25.1.35 0Z"
    />
  </Svg>
);
