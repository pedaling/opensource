import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.25 12.5h-3.5c-.15 0-.25.1-.25.25v3.5c0 .15.1.25.25.25h3.5c.15 0 .25-.1.25-.25v-3.5c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M21.75 4H17.5V2.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V4H9V2.25C9 2.1 8.9 2 8.75 2h-2c-.15 0-.25.1-.25.25V4H2.25C2.1 4 2 4.1 2 4.25v17.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V4.25c0-.15-.1-.25-.25-.25ZM19.5 19.5h-15v-13h2v1.75c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V6.5h6v1.75c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V6.5h2v13Z" />
  </Svg>
);

Regular.iconType = 'Regular';
