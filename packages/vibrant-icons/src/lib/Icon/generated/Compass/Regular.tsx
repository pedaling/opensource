import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="m14.2 9.7-.95 3.6-3.6.95.85-3.75 3.7-.8ZM16.75 7 9 8.65c-.2.05-.3.15-.35.35L7 16.7c-.05.15.1.3.2.3h.05l7.45-1.95c.15-.05.3-.15.35-.35L17 7.3c.05-.15-.1-.3-.25-.3Z" />
  </Svg>
);

Regular.iconType = 'Regular';
