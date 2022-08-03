import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M5.25 21H6.5c.15 0 .25-.1.25-.25v-8.1l11.95 8.3c.05.05.05.05.1.05.1 0 .2-.1.2-.2V3.2c0-.1-.1-.2-.2-.2-.05 0-.05 0-.1.05l-11.95 8.3v-8.1c0-.15-.1-.25-.25-.25H5.25C5.1 3 5 3.1 5 3.25v17.5c0 .15.1.25.25.25Zm12-14.8v11.6L8.9 12l8.35-5.8Z" />
  </Svg>
);
