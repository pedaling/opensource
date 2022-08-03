import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="m14.7 9.25-1.1 4.35-4.35 1.1.95-4.5 4.5-.95ZM16.75 7 9 8.65c-.2.05-.3.15-.35.35L7 16.7c-.05.15.1.3.2.3h.05l7.45-1.95c.15-.05.3-.15.35-.35L17 7.3c.05-.15-.1-.3-.25-.3Z" />
  </Svg>
);
