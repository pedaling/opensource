import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm.9 20.2v-4.45c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25v4.45c-4.4-.4-7.9-3.95-8.35-8.35h4.45c.15 0 .25-.1.25-.25v-1.25c0-.15-.1-.25-.25-.25H2.8c.4-4.4 3.95-7.9 8.35-8.35V7.2c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V2.8c4.4.4 7.9 3.95 8.35 8.35H16.8c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h4.45c-.45 4.4-3.95 7.9-8.35 8.3Z" />
  </Svg>
);
