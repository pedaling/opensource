import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'store-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25M19.5 4.5v3.7c0 1-.8 1.8-1.85 1.8-1 0-1.8-.8-1.8-1.8V4.5zm-5.65 0v3.7c0 1-.8 1.8-1.85 1.8-1 0-1.8-.8-1.8-1.8V4.5zm-9.35 0h3.65v3.7c0 1-.8 1.8-1.85 1.8-1 0-1.8-.8-1.8-1.8zm8.75 15v-4.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v4.25H4.5v-7.95q.825.45 1.8.45c1.15 0 2.15-.5 2.85-1.3.7.8 1.75 1.3 2.85 1.3s2.15-.5 2.85-1.25c.7.8 1.7 1.25 2.85 1.25.65 0 1.3-.15 1.85-.45v7.95z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'StoreRegular';
