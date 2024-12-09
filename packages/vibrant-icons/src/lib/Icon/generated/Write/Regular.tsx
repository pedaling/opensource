import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'write-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 22H2.25c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h19.5c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25m-3-18.75a4.16 4.16 0 0 0-3-1.25c-1.1 0-2.15.4-3 1.25l-7.8 7.8q-.15.15-.15.3l-.8 5.5c-.1.6.4 1.15 1 1.15h.15l5.5-.8q.15 0 .3-.15l7.8-7.8a4.255 4.255 0 0 0 0-6M9.65 14.8l-2 .3-.75-.75.3-2 7.3-7.3c.35-.35.75-.5 1.25-.5.45 0 .9.2 1.25.5.7.7.7 1.8 0 2.45z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'WriteRegular';
