import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'infinity-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.165 17.1c-2.145 0-3.53-1.365-5-2.81L12 13.145l-1.165 1.145c-1.47 1.445-2.855 2.81-5 2.81C2.975 17.1.65 14.81.65 12s2.325-5.1 5.185-5.1c2.155 0 3.545 1.37 5.015 2.825l1.15 1.13 1.15-1.13c1.47-1.45 2.865-2.825 5.015-2.825 2.86 0 5.185 2.29 5.185 5.1s-2.325 5.1-5.185 5.1m0-8.5c-1.385 0-2.355.885-3.825 2.335L13.26 12l1.095 1.08c1.46 1.44 2.43 2.32 3.81 2.32 1.92 0 3.485-1.525 3.485-3.4s-1.565-3.4-3.485-3.4m-12.33 0c-1.92 0-3.485 1.525-3.485 3.4s1.565 3.4 3.485 3.4c1.38 0 2.345-.88 3.81-2.32L10.74 12l-1.08-1.065C8.195 9.485 7.225 8.6 5.835 8.6" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'InfinityThin';
