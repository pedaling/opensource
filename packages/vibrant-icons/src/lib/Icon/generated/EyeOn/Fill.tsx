import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId = 'eyeon', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.75 13h-2c-.15 0-.25-.1-.25-.25C20.35 8.45 16.6 5 12 5s-8.35 3.45-8.5 7.75c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25C1.15 7.05 6 2.5 12 2.5s10.85 4.55 11 10.25c0 .15-.1.25-.25.25Z" />
    <Svg.Path d="M17 12.05c-.3.95-1.2 1.6-2.25 1.6-1.3 0-2.4-1.15-2.35-2.5.05-.85.55-1.6 1.25-2 .2-.1.15-.4-.05-.45-.65-.2-1.35-.25-2.1-.2-3.1.3-5.5 2.9-5.5 6 0 3.65 3.25 6.55 7 5.95a5.9 5.9 0 0 0 4.85-4.75c.25-1.35.05-2.6-.45-3.7-.05-.2-.35-.2-.4.05Z" />
  </Svg>
);

Fill.iconType = 'Fill';
