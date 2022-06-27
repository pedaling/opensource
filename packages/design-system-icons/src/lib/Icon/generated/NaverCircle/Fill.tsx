import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm4.5 15h-3.1s-2.8-4.05-2.85-4.2c-.1-.1-.1 0-.1 0 .1.55.2.65.2 1.6V16H7.5V8h3.15s2.85 4.3 2.95 4.4c.1.1.1 0 .1 0-.15-.65-.25-.95-.25-2.05V8h3.05v8Z" />
  </Svg>
);
