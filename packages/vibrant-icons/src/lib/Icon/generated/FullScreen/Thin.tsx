import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'fullscreen-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 13H20.5c-.15 0-.25.1-.25.25v7h-7c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h8.5c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25m-19.5-2H3.5c.15 0 .25-.1.25-.25v-7h7c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25h-8.5C2.1 2 2 2.1 2 2.25v8.5c0 .15.1.25.25.25m.05 11h7.95c.15 0 .25-.1.25-.25V20.5c0-.15-.1-.25-.25-.25H5l5.45-5.45c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0L3.75 19v-5.25c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v7.95c0 .15.15.3.3.3" />
    <Svg.Path d="M2.25 11H3.5c.15 0 .25-.1.25-.25v-7h7c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25h-8.5C2.1 2 2 2.1 2 2.25v8.5c0 .15.1.25.25.25M21.7 2h-7.95c-.15 0-.25.1-.25.25V3.5c0 .15.1.25.25.25H19L13.6 9.2c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0L20.25 5v5.25c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'FullScreenThin';
