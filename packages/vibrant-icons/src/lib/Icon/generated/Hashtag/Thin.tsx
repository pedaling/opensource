import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M16.95 9.1h3.15c.1 0 .2-.1.25-.2l.25-1.25c.05-.15-.1-.3-.25-.3H17.3l1-5.1c.05-.1-.05-.25-.2-.25h-1.25c-.1 0-.2.1-.25.2l-1.05 5.15H10.3l1-5.1c.05-.1-.05-.25-.2-.25H9.85c-.1 0-.2.1-.25.2L8.55 7.35H5.4c-.1 0-.2.1-.25.2L4.9 8.8c-.05.15.1.3.25.3H8.2l-1.15 5.75H3.9c-.1 0-.2.1-.25.2L3.4 16.3c-.05.15.1.3.25.3H6.7l-1 5.1c-.05.15.1.3.25.3H7.2c.1 0 .2-.1.25-.2l1.05-5.15h5.2l-1 5.1c-.05.15.1.3.25.3h1.25c.1 0 .2-.1.25-.2l1.05-5.15h3.15c.1 0 .2-.1.25-.2l.25-1.25c.05-.15-.1-.3-.25-.3h-3.05l1.1-5.85Zm-2.9 5.8H8.8l1.15-5.75h5.2l-1.1 5.75Z" />
  </Svg>
);

Thin.iconType = 'Thin';
