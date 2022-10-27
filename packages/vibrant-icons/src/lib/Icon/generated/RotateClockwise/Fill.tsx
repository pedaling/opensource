import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M18.75 16.25A8.12 8.12 0 0 1 11.5 20c-4-.25-7.3-3.55-7.5-7.6C3.8 7.8 7.45 4 12 4c1.2 0 2.35.3 3.4.75l-.9 1.45c-.1.15 0 .35.2.35l5.5-.05c.15 0 .3-.15.2-.35l-2.3-5c-.05-.15-.3-.15-.4 0l-.95 1.5c-1.6-.8-3.45-1.25-5.35-1.15-5.3.35-9.65 4.7-9.9 10-.3 6.05 4.5 11 10.5 11 3.8 0 7.1-2 8.95-5 .05-.1.05-.3-.1-.35l-1.75-1a.264.264 0 0 0-.35.1Z" />
  </Svg>
);

Fill.iconType = 'Fill';
