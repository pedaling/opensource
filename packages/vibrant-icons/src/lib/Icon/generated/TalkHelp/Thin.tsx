import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'talkhelp-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.9 17.7a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm-.85-3.45c0-.5.05-.8.25-1.3.35-.8 1-1.3 1.6-1.85.55-.55 1.1-1.2 1.1-2 0-.55-.15-1-.45-1.3-.3-.3-.8-.45-1.4-.45-.5 0-1.05.15-1.45.5-.45.4-.5.95-.5 1.55H8.6c0-1.3.35-2 1-2.5.65-.55 1.5-.8 2.55-.8 1.1 0 1.95.25 2.55.8.6.55.9 1.3.9 2.2 0 .85-.4 1.65-.95 2.25-.4.5-.95.9-1.4 1.35-.4.45-.65.8-.65 1.6.05-.05-1.55-.05-1.55-.05Z" />
    <Svg.Path d="M21.35 17.85C22.4 16.15 23 14.15 23 12c0-6.1-4.9-11-11-11C5.5 1 .35 6.6 1.05 13.25c.55 5.05 4.65 9.15 9.7 9.7 2.6.3 5.05-.35 7.05-1.6.1-.05.2-.1.3-.05l3.1.25c.15 0 .25-.1.25-.25l-.25-3.15c.05-.15.05-.25.15-.3Zm-1.75-.6c-.1.1-.1.2-.1.35l.15 1.85c0 .1-.1.2-.2.2l-1.85-.15c-.1 0-.25 0-.3.1-1.8 1.3-4.1 1.95-6.55 1.6-4.2-.55-7.5-4.05-7.95-8.25C2.25 7.1 7.1 2.25 12.9 2.8c4.4.45 7.95 4.05 8.3 8.45.2 2.25-.45 4.3-1.6 6Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TalkHelpThin';
