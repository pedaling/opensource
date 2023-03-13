import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v14.5c0 .15.1.25.25.25h8.9v3.25h-3.9c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h9.5c.15 0 .25-.1.25-.25V20.5c0-.15-.1-.25-.25-.25h-3.9V17h8.85c.15 0 .25-.1.25-.25V2.25C22 2.1 21.9 2 21.75 2Zm-1.5 13.25H3.75V3.75h16.5v11.5Z" />
  </Svg>
);

Thin.iconType = 'Thin';
