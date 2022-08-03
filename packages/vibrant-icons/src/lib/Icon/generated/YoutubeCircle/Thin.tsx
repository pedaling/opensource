import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M17.5 8.95c-.15-.55-.55-.95-1.1-1.1-1-.25-4.35-.25-4.35-.25s-3.4 0-4.4.25C7.1 8 6.65 8.45 6.5 9c-.25 1-.25 3-.25 3s0 2.05.25 3.05c.15.55.55.95 1.1 1.1 1 .25 4.35.25 4.35.25s3.4 0 4.35-.25c.55-.15.95-.55 1.1-1.1.25-1 .25-3.05.25-3.05s.1-2.05-.15-3.05Zm-6.75 5.15V9.85l3.65 2.1-3.65 2.15Z" />
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
  </Svg>
);
