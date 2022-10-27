import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M5.25 21h2c.15 0 .25-.1.25-.25v-7.6l11.2 7.8c.05.05.05.05.1.05.1 0 .2-.1.2-.2V3.2c0-.1-.1-.2-.2-.2-.05 0-.05 0-.1.05l-11.2 7.8v-7.6c0-.15-.1-.25-.25-.25h-2C5.1 3 5 3.1 5 3.25v17.5c0 .15.1.25.25.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
