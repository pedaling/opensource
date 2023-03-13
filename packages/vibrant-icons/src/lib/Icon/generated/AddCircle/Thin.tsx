import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M17.75 11.1H12.9V6.25c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25v4.85H6.3c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h4.85v4.85c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-4.85h4.85c.15 0 .25-.1.25-.25v-1.25c0-.1-.1-.25-.25-.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
