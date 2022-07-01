import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12.15 10.9 22 4.35v-.6c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v.6l9.85 6.55c.1.05.2.05.3 0Z" />
    <Svg.Path d="M2.25 20.5h19.5c.15 0 .25-.1.25-.25V7.35l-9.85 6.55c-.1.05-.2.05-.3 0L2 7.35v12.9c0 .15.1.25.25.25Z" />
  </Svg>
);
