import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'couponvertical-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.6 22.85a.25.25 0 0 1-.25.25H13.9V23c0-1.048-.853-1.9-1.9-1.9s-1.9.852-1.9 1.9v.1H3.65a.25.25 0 0 1-.25-.25V1.15A.25.25 0 0 1 3.65.9h6.45V1c0 1.047.852 1.9 1.9 1.9s1.9-.853 1.9-1.9V.9h6.45a.25.25 0 0 1 .25.25z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'CouponVerticalFill';
