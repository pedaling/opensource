import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'coupon-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20 6v2.25c-1.2.8-2 2.2-2 3.75s.8 2.95 2 3.75V18H4v-2.25c1.2-.8 2-2.2 2-3.75s-.8-2.95-2-3.75V6zm2.25-2.5H1.75c-.15 0-.25.1-.25.25v6c0 .15.1.25.25.25 1 .1 1.75.95 1.75 2s-.75 1.85-1.75 2c-.15 0-.25.1-.25.25v6c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25v-6c0-.15-.1-.25-.25-.25-1-.1-1.75-.95-1.75-2s.75-1.85 1.75-2c.15 0 .25-.1.25-.25v-6c0-.15-.1-.25-.25-.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CouponRegular';
