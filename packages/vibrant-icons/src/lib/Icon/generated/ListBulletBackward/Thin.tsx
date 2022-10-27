import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M2.25 5.6h13c.15 0 .25-.1.25-.25V4.1c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25Zm0 7.3h13c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v1.25c0 .1.1.25.25.25Zm0 7.2h13c.15 0 .25-.1.25-.25V18.6c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25Zm18-13.6c.95 0 1.75-.8 1.75-1.75S21.2 3 20.25 3s-1.75.8-1.75 1.75.8 1.75 1.75 1.75Zm0 7.25c.95 0 1.75-.8 1.75-1.75s-.8-1.75-1.75-1.75-1.75.8-1.75 1.75.8 1.75 1.75 1.75Zm0 7.25c.95 0 1.75-.8 1.75-1.75s-.8-1.75-1.75-1.75-1.75.8-1.75 1.75.8 1.75 1.75 1.75Z" />
  </Svg>
);

Thin.iconType = 'Thin';
