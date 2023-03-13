import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M7.5 8h3.15s2.85 4.3 2.95 4.4c.1.1.1 0 .1 0-.15-.65-.25-.95-.25-2.05V8h3.05v8h-3.1s-2.8-4.05-2.85-4.2c-.1-.1-.1 0-.1 0 .1.55.2.65.2 1.6V16H7.5V8Z" />
  </Svg>
);

Regular.iconType = 'Regular';
