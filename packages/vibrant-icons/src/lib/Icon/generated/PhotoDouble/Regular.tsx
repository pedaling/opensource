import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M7.1 8.8a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM21.75 6H19.5v13.5H6v2.25c0 .15.1.25.25.25h15.5c.15 0 .25-.1.25-.25V6.25c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M17.75 2H2.25C2.1 2 2 2.1 2 2.25v15.5c0 .15.1.25.25.25H18V2.25c0-.15-.1-.25-.25-.25ZM15.5 4.5v6.65L12 7.65c-.1-.1-.25-.1-.35 0L4.5 13V4.5h11Zm0 11h-11v-.05l7.15-5.3L15.5 14v1.5Z" />
  </Svg>
);

Regular.iconType = 'Regular';
