import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm4.95 14.55-1.4 1.4c-.1.1-.25.1-.35 0l-4.05-4.05c-.25-.25-.35-.55-.35-.9V6.25c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v5.25l3.7 3.7c.05.1.05.25-.05.35Z" />
  </Svg>
);
