import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v14.5c0 .15.1.25.25.25h8.5v2.5h-3.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h9.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-3.5V17h8.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25ZM19.5 14.5h-15v-10h15v10Z" />
  </Svg>
);

Regular.iconType = 'Regular';
