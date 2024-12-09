import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'confetti-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.5 15.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
    <Svg.Path fillRule="evenodd" d="M18.75 4.25c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" clipRule="evenodd" />
    <Svg.Path d="m7.35 10.45 6.25 6.25-9.8 3.55zm-.6-3c-.1 0-.2.05-.25.15L1.05 22.65c-.1.2.05.35.25.35h.1l15-5.5c.15-.05.2-.3.1-.4L6.9 7.55c-.05-.05-.1-.1-.15-.1m6.5 3.15 3.1-3.55c.1-.1.25-.1.35 0l2.8 2.45 2.1-2.4c.1-.1.25-.1.35 0l.95.8c.1.1.1.25 0 .35l-3.1 3.55c-.1.1-.25.1-.35 0l-2.8-2.45-2.1 2.4c-.1.1-.25.1-.35 0l-.95-.8c-.1-.1-.1-.25 0-.35M9.5 7.65V3.7c0-.15.1-.25.25-.25H13v-2.2c0-.15.1-.25.25-.25h1.25c.15 0 .25.1.25.25v3.7c0 .15-.1.25-.25.25h-3.25v2.45c0 .15-.1.25-.25.25H9.75c-.15 0-.25-.1-.25-.25" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ConfettiThin';
