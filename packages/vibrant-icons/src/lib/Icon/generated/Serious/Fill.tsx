import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm-4.5 9.75v-2c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25Zm7.5 5.5c0 .15-.1.25-.25.25h-5.5c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h5.5c.15 0 .25.1.25.25v2Zm1.5-5.5c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v2Z" />
  </Svg>
);
