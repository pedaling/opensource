import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'couponvertical-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m20.5999 22.8499c0 .1381-.1119.25-.25.25h-6.45v-.1c0-1.0475-.8525-1.9-1.9-1.9s-1.9.8525-1.9 1.9v.1h-6.45c-.13807 0-.25-.1119-.25-.25v-21.70001c0-.13807.11193-.249995.25-.249995h6.45v.099998c0 1.047497.8525 1.899997 1.9 1.899997s1.9-.8525 1.9-1.899997v-.099998h6.45c.1381 0 .25.111925.25.249995zm-2.2-19.75001h-2.8795c-.7405 1.2355-2.0835 2-3.5205 2s-2.78-.7645-3.5205-2h-2.8795v17.80001h2.8795c.7405-1.2355 2.0835-2 3.5205-2s2.78.7645 3.5205 2h2.8795z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CouponVerticalRegular';
