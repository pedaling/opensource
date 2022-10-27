import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.7 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3ZM11.35 14c-.2.35-.55.65-.95.85-.4.2-.9.3-1.5.3s-1.15-.1-1.55-.35c-.45-.25-.75-.6-1-1-.25-.45-.35-.95-.35-1.6v-.45c0-.6.1-1.1.35-1.55.25-.45.6-.75 1-1 .45-.25.95-.35 1.55-.35.55 0 1.05.1 1.45.3.4.2.7.5.95.85.2.35.35.8.35 1.3h-1.9c0-.15-.05-.3-.1-.45a.512.512 0 0 0-.25-.3c-.1-.1-.25-.1-.4-.1-.25 0-.45.1-.6.35-.15.25-.25.55-.25.95v.4c0 .45.05.8.2 1 .15.25.35.35.6.35.15 0 .3-.05.4-.1.1-.05.2-.15.25-.3.05-.15.1-.3.1-.45h1.9c.05.55-.05 1-.25 1.35Zm6.3 0c-.2.35-.55.65-.95.85-.4.2-.9.3-1.5.3s-1.15-.1-1.55-.35c-.45-.25-.75-.6-1-1-.25-.45-.35-.95-.35-1.6v-.45c0-.6.1-1.1.35-1.55.25-.45.6-.75 1-1 .45-.25.95-.35 1.55-.35.55 0 1.05.1 1.45.3.4.2.7.5.95.85.2.35.35.8.35 1.3h-1.9c0-.15-.05-.3-.1-.45a.512.512 0 0 0-.25-.3c-.1-.1-.25-.1-.4-.1-.25 0-.45.1-.6.35-.15.25-.25.55-.25.95v.4c0 .45.05.8.2 1 .15.25.35.35.6.35.15 0 .3-.05.4-.1.1-.05.2-.15.25-.3.05-.15.1-.3.1-.45h2c0 .55-.1 1-.35 1.35Z" />
  </Svg>
);

Fill.iconType = 'Fill';
