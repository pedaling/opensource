import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'photodouble-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.1 8.8a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8M21.75 6H19.5v13.5H6v2.25c0 .15.1.25.25.25h15.5c.15 0 .25-.1.25-.25V6.25c0-.15-.1-.25-.25-.25" />
    <Svg.Path d="M17.75 2H2.25C2.1 2 2 2.1 2 2.25v15.5c0 .15.1.25.25.25H18V2.25c0-.15-.1-.25-.25-.25M15.5 4.5v6.65L12 7.65c-.1-.1-.25-.1-.35 0L4.5 13V4.5zm0 11h-11v-.05l7.15-5.3L15.5 14z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PhotoDoubleRegular';
