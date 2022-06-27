import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M22 5.4c0-.1-.05-.2-.15-.2L12.1 1h-.2L2.15 5.15C2.1 5.2 2 5.3 2 5.4c0 1.1-.15 7.8 1.2 10.8 1.75 3.95 7.95 6.45 8.75 6.8h.2c.8-.3 7-2.8 8.7-6.8 1.3-3 1.15-9.7 1.15-10.8Zm-5.15 4.4-5.6 5.65c-.1.1-.25.1-.35 0l-3.7-3.7c-.1-.1-.1-.25 0-.35L8.6 10c.1-.1.25-.1.35 0l2.1 2.1 4-4c.1-.1.25-.1.35 0l1.4 1.4c.15.05.15.25.05.3Z" />
  </Svg>
);
