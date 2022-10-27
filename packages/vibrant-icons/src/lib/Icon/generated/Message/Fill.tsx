import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12.15 10.9 22 4.35v-.6c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v.6l9.85 6.55c.1.05.2.05.3 0Z" />
    <Svg.Path d="M2.25 20.5h19.5c.15 0 .25-.1.25-.25V7.35l-9.85 6.55c-.1.05-.2.05-.3 0L2 7.35v12.9c0 .15.1.25.25.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
