import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 22H2.25c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h19.5c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25ZM19 3.1c-1.45-1.45-3.85-1.45-5.3 0l-8.35 8.35c-.1.1-.15.15-.15.3L4.1 17c-.1.55.3 1.05.9 1h.15l5.25-1.05c.1 0 .2-.05.25-.15L19 8.4c1.45-1.45 1.45-3.85 0-5.3Z" />
  </Svg>
);

Fill.iconType = 'Fill';
