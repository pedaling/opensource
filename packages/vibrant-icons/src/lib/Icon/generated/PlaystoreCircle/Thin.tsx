import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m17.85 11.5-1.75-1-1.5 1.5 1.5 1.5 1.75-1c.4-.2.4-.75 0-1ZM8.6 7v10l4.95-5L8.6 7Zm.7 10.45c.05 0 .1-.05.15-.05l5.95-3.45-1.35-1.35-4.75 4.85Zm6.1-7.35L9.45 6.65c-.05-.05-.1-.05-.2-.05l4.8 4.9 1.35-1.4Z" />
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
  </Svg>
);
