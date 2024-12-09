import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx15-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 7.306 8.664 10.64 7.108 9.085l3.336-3.335-3.336-3.336L8.664.858 12 4.194 15.336.858l1.556 1.556-3.336 3.336 3.336 3.335-1.556 1.556zm-7.384 7.867v1.806l1.977-1.325v6.003h2.06v-7.85h-2.03zm12.3 1.25c-.744 0-1.378.29-1.723.78l.142-1.782H19v-1.614H13.69l-.34 4.719h1.792l.014-.027c.078-.151.2-.288.356-.396.217-.159.494-.243.803-.243.713 0 1.212.472 1.212 1.148v.01c0 .686-.499 1.164-1.212 1.164-.587 0-1.066-.332-1.193-.828l-.02-.074h-1.88l.009.144a2.34 2.34 0 0 0 .893 1.69c.559.447 1.316.683 2.191.683 1.896 0 3.17-1.132 3.17-2.816v-.011c0-1.476-1.08-2.548-2.569-2.548m-5.65 3.222c-.582 0-1.055.473-1.055 1.054s.463 1.06 1.054 1.06c.592 0 1.06-.465 1.06-1.06s-.465-1.054-1.06-1.054" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaySpeedX15Regular';
