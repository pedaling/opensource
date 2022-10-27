import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M23.75 17.5H20v-3.75c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v3.75h-3.75c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h3.75v3.75c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V20h3.75c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M19.7 4H4.3c-.15 0-.3.15-.3.3v15.45c0 .15.15.3.3.3h7.45c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-5.2l6.05-4.45c.1-.05.25-.05.3.05l2.6 2.6c.15.15.45.05.45-.2V12.8c0-.15-.05-.25-.15-.35L13.15 9.8c-.1-.1-.2-.1-.3-.05L6.5 14.4V6.5h11v5.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V4.3c0-.15-.15-.3-.3-.3Z" />
    <Svg.Path d="M9.25 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
  </Svg>
);

Regular.iconType = 'Regular';
