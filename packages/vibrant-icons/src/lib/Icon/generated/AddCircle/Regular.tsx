import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M17.75 10.75h-4.5v-4.5c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v4.5h-4.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h4.5v4.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-4.5h4.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
