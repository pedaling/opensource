import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M10 16.2 3.3 9.5c-.1-.1-.25-.1-.35 0l-.9.9c-.05.1-.05.25 0 .35L9.8 18.5c.1.1.25.1.35 0L21.9 6.75c.1-.1.1-.25 0-.35l-.85-.9c-.1-.1-.25-.1-.35 0L10 16.2Z" />
  </Svg>
);
