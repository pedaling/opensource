import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m22.35 10.8-10.2-9.25c-.1-.1-.25-.1-.35 0L1.65 10.8c-.1.1-.15.2-.15.35v11.1c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25v-11.1c0-.15-.05-.25-.15-.35ZM20 20h-6.75v-4.75c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V20H4v-7.95l8-7.25 8 7.25V20Z" />
  </Svg>
);

Regular.iconType = 'Regular';
