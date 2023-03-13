import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId = 'lock', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.9 17.55c0 .1-.1.2-.2.2h-1.4c-.1 0-.2-.1-.2-.2v-3.6c0-.1.1-.2.2-.2h1.4c.1 0 .2.1.2.2v3.6Z" />
    <Svg.Path d="M17.6 9V6.8c0-2.95-2.15-5.5-5.1-5.75-3.35-.3-6.15 2.3-6.15 5.6V9h-3.1C3.1 9 3 9.1 3 9.25v13c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-13c0-.15-.1-.25-.25-.25H17.6ZM8.1 6.6c0-2.15 1.75-3.9 3.9-3.9s3.9 1.75 3.9 3.9V9H8.1V6.6Zm11.15 14.15H4.75v-10h14.5v10Z" />
  </Svg>
);

Thin.iconType = 'Thin';
