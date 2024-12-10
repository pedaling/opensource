import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'paper2-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18 4.5v15H6v-15zM20.2 2H3.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25h16.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3" />
    <Svg.Path d="M15.25 9.25h-6.5c-.15 0-.25-.1-.25-.25V8c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25m0 3.5h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25m0 3.5h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'Paper2Regular';
