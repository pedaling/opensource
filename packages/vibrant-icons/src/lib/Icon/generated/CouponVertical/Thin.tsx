import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'couponvertical-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m9.8549 1.14989h-5.955c-.13807 0-.25.11193-.25.25v21.20001c0 .1381.11193.25.25.25h5.955c.0775-1.1155 1.01-2 2.145-2s2.0675.8845 2.145 2h5.955c.1381 0 .25-.1119.25-.25v-21.20001c0-.13807-.1119-.25-.25-.25h-5.955c-.0775 1.1155-1.01 2-2.145 2s-2.0675-.8845-2.145-2zm-1.2315 1.7.0435.0745c.688 1.1875 1.9655 1.9255 3.333 1.9255s2.6445-.7375 3.333-1.9255l.0435-.0745h3.2735v18.30001h-3.2735l-.0435-.0745c-.688-1.1875-1.9655-1.9255-3.333-1.9255s-2.6445.7375-3.333 1.9255l-.0435.0745h-3.2735v-18.30001z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CouponVerticalThin';
