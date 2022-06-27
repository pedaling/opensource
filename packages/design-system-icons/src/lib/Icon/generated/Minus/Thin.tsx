import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M21.25 12.9H2.75c-.15 0-.25-.1-.25-.25V11.4c0-.15.1-.25.25-.25h18.5c.15 0 .25.1.25.25v1.25c0 .1-.1.25-.25.25Z" />
  </Svg>
);
