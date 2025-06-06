import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'subtitle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.5 4.5v15h-15v-15zM21.7 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3" />
    <Svg.Path d="M6 11.75c0-.6.1-1.1.35-1.55s.6-.75 1-1c.45-.25.95-.35 1.55-.35.55 0 1.05.1 1.45.3s.7.5.95.85c.2.35.35.8.35 1.3h-1.9c0-.15-.05-.3-.1-.45a.5.5 0 0 0-.25-.3c-.1-.1-.25-.1-.4-.1-.25 0-.45.1-.6.35s-.25.55-.25.95v.4c0 .45.05.8.2 1 .15.25.35.35.6.35.15 0 .3-.05.4-.1s.2-.15.25-.3.1-.3.1-.45h1.9c0 .5-.1.95-.35 1.3-.2.35-.55.65-.95.85q-.6.3-1.5.3c-.9 0-1.15-.1-1.55-.35-.45-.25-.75-.6-1-1-.25-.45-.35-.95-.35-1.6v-.4zm6.35 0c0-.6.1-1.1.35-1.55s.6-.75 1-1c.45-.25.95-.35 1.55-.35.55 0 1.05.1 1.45.3s.7.5.95.85c.2.35.35.8.35 1.3h-1.9c0-.15-.05-.3-.1-.45a.5.5 0 0 0-.25-.3c-.1-.1-.25-.1-.4-.1-.25 0-.45.1-.6.35s-.25.55-.25.95v.4c0 .45.05.8.2 1 .15.25.35.35.6.35.15 0 .3-.05.4-.1s.2-.15.25-.3.1-.3.1-.45H18c0 .5-.1.95-.35 1.3-.2.35-.55.65-.95.85q-.6.3-1.5.3c-.9 0-1.15-.1-1.55-.35-.45-.25-.75-.6-1-1-.25-.45-.35-.95-.35-1.6v-.4z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SubtitleRegular';
