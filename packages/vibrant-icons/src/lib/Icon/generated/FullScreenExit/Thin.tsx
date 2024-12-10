import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'fullscreenexit-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 13H20.5c-.15 0-.25.1-.25.25v7h-7c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h8.5c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25m-19.5-2H3.5c.15 0 .25-.1.25-.25v-7h7c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25h-8.5C2.1 2 2 2.1 2 2.25v8.5c0 .15.1.25.25.25m7.95 2.5H2.25c-.15 0-.25.1-.25.25V15c0 .15.1.25.25.25H7.5L2.1 20.7c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l5.4-5.45v5.25c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V13.8c0-.15-.15-.3-.3-.3" />
    <Svg.Path d="M2.25 11H3.5c.15 0 .25-.1.25-.25v-7h7c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25h-8.5C2.1 2 2 2.1 2 2.25v8.5c0 .15.1.25.25.25m11.55-.5h7.95c.15 0 .25-.1.25-.25V9c0-.15-.1-.25-.25-.25H16.5l5.4-5.45c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0l-5.4 5.45V2.25c0-.15-.1-.25-.25-.25h-1.25c-.15 0-.25.1-.25.25v7.95c0 .15.15.3.3.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'FullScreenExitThin';
