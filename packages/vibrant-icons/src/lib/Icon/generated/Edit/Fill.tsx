import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m3.3 14.85-.8 5.5c-.1.6.4 1.15 1 1.15h.15l5.5-.8c.1 0 .2-.05.3-.15l8.25-8.25-6-6-8.25 8.25c-.1.1-.15.2-.15.3Zm16.45-4.6a4.255 4.255 0 0 0 0-6 4.16 4.16 0 0 0-3-1.25c-1.1 0-2.15.4-3 1.25l-.7.7 6 6 .7-.7Z" />
  </Svg>
);

Fill.iconType = 'Fill';
