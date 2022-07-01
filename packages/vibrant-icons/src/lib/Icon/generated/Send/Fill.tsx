import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m21.9 9.3-4.6-3c-.15-.1-.35 0-.35.2v1.75H10c-4.3 0-7.75 3.4-7.95 7.6v2.9c-.05.15.05.25.2.25h2c.15 0 .25-.1.25-.25v-2.9c.2-2.85 2.6-5.1 5.5-5.1h6.95v1.75c0 .2.2.3.35.2l4.6-3c.15-.1.15-.3 0-.4Z" />
  </Svg>
);
