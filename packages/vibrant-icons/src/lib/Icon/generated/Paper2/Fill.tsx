import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.25 2H3.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25h16.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25ZM15.5 16c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1Zm0-3.5c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1Zm0-3.5c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25V8c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1Z" />
  </Svg>
);

Fill.iconType = 'Fill';
