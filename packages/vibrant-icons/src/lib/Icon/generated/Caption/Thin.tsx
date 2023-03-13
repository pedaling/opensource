import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M18.25 2.5h-16c-.15 0-.25.1-.25.25v3.5c0 .15.1.25.25.25H3.5c.15 0 .25-.1.25-.25v-2H9.5v15.5H8c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h4.5c.15 0 .25-.1.25-.25V20c0-.15-.1-.25-.25-.25H11V4.25h5.75v2c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-3.5c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M22.7 12.75h-8c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h3.1v6.75c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V14.5h3.1c.15 0 .25-.1.25-.25V13c.05-.15-.05-.25-.2-.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
