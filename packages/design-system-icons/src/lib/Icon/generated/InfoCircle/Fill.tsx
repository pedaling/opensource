import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm1.25 16.4c0 .05-.05.1-.1.1h-2.3c-.05 0-.1-.05-.1-.1v-6.8c0-.05.05-.1.1-.1h2.3c.05 0 .1.05.1.1v6.8ZM12 9c-.85 0-1.5-.65-1.5-1.5S11.15 6 12 6s1.5.65 1.5 1.5S12.85 9 12 9Z" />
  </Svg>
);
