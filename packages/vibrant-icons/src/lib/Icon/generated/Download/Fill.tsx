import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 17h-2c-.15 0-.25.1-.25.25v2.25h-15v-2.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v4.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25v-4.5c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M19.45 9.8 18 8.4c-.1-.1-.25-.1-.35 0l-4.4 4.4V2.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V12.8l-4.4-4.4c-.1-.1-.25-.1-.35 0L4.6 9.8c-.1.1-.1.25 0 .35l7.25 7.25c.1.1.25.1.35 0l7.25-7.25c.05-.05.05-.25 0-.35Z" />
  </Svg>
);

Fill.iconType = 'Fill';
