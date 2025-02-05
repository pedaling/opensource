import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'couponvertical-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9.855 1.15H3.9a.25.25 0 0 0-.25.25v21.2c0 .138.112.25.25.25h5.955c.077-1.116 1.01-2 2.145-2s2.067.884 2.145 2H20.1a.25.25 0 0 0 .25-.25V1.4a.25.25 0 0 0-.25-.25h-5.955c-.078 1.115-1.01 2-2.145 2s-2.068-.885-2.145-2m-1.232 1.7.044.074C9.355 4.112 10.632 4.85 12 4.85s2.644-.738 3.333-1.926l.043-.074h3.274v18.3h-3.274l-.043-.075c-.688-1.187-1.966-1.925-3.333-1.925s-2.645.737-3.333 1.925l-.044.075H5.35V2.85z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CouponVerticalThin';
