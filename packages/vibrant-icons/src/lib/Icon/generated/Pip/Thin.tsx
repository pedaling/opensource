import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M3.5 20.5v-17h17v7.25c0 .15.1.25.25.25h1c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3H2.3c-.15 0-.3.15-.3.3v19.45c0 .1.15.25.3.25h8.45c.15 0 .25-.1.25-.25v-1c0-.15-.1-.25-.25-.25H3.5Z" />
    <Svg.Path d="M3.75 20.25V3.75h16.5v7c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h8.5c.15 0 .25-.1.25-.25V20.5c0-.15-.1-.25-.25-.25h-7Z" />
    <Svg.Path d="M20.25 15.25v5h-5v-5h5Zm1.5-1.75h-8c-.15 0-.25.1-.25.25v8c0 .15.1.25.25.25h8c.15 0 .25-.1.25-.25v-8c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
