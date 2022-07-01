import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="m7.4 9.4 1.05-1.05c.1-.1.25-.1.35 0l2.2 2.2V5.7c0-.15.1-.25.25-.25h1.5c.15 0 .25.1.25.25v4.8l2.2-2.2c.1-.1.25-.1.35 0l1.05 1.05c.1.1.1.25 0 .35l-4.45 4.45c-.1.1-.25.1-.35 0L7.35 9.7c-.05-.05-.05-.2.05-.3Zm9.35 7.85h-9.5c-.15 0-.25-.1-.25-.25v-1.75c0-.15.1-.25.25-.25h9.5c.15 0 .25.1.25.25V17c0 .15-.1.25-.25.25Z" />
  </Svg>
);
