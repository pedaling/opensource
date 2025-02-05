import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'couponvertical-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.6 22.85a.25.25 0 0 1-.25.25H13.9V23c0-1.048-.853-1.9-1.9-1.9s-1.9.852-1.9 1.9v.1H3.65a.25.25 0 0 1-.25-.25V1.15A.25.25 0 0 1 3.65.9h6.45V1c0 1.047.852 1.9 1.9 1.9s1.9-.853 1.9-1.9V.9h6.45a.25.25 0 0 1 .25.25zM18.4 3.1h-2.88c-.74 1.235-2.083 2-3.52 2s-2.78-.765-3.52-2H5.6v17.8h2.88c.74-1.236 2.083-2 3.52-2s2.78.764 3.52 2h2.88z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CouponVerticalRegular';
