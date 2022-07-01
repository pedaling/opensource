import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M4.5 19.5c0 .85.65 1.5 1.5 1.5h14.5c.85 0 1.5-.65 1.5-1.5V3.25c0-.15-.1-.25-.25-.25H4.65c-.1 0-.2.05-.2.2l-3.4 11.85C.8 16.05 1.5 17 2.5 17h14.45c.65 0 1.25-.45 1.45-1.05l1.1-4v6.55h-15v1Z" />
  </Svg>
);
