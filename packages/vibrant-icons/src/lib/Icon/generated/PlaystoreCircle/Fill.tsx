import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1ZM9.45 6.65l5.95 3.45-1.35 1.35-4.8-4.9c.1.05.15.05.2.1Zm-.9 10.2V7l4.95 5-4.95 5c.05 0 0-.05 0-.15Zm.9.55c-.05.05-.1.05-.15.05l4.8-4.85 1.35 1.35-6 3.45Zm8.4-4.85-1.75 1-1.5-1.5 1.5-1.5 1.75 1c.4.2.4.75 0 1Z" />
  </Svg>
);

Fill.iconType = 'Fill';
