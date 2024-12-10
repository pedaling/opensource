import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'slowmotion-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M16.685 12 9.4 16.683V7.317zM1.95 11h2.213A7.8 7.8 0 0 1 5.75 7.165L4.19 5.603A10.05 10.05 0 0 0 1.95 11m3.654-6.81 1.561 1.56A7.8 7.8 0 0 1 11 4.163V1.95a10.05 10.05 0 0 0-5.396 2.24m0 15.62A10.05 10.05 0 0 0 11 22.05v-2.213a7.8 7.8 0 0 1-3.835-1.588zM13 1.95v2.212a7.84 7.84 0 0 1 4.586 2.252A7.85 7.85 0 0 1 19.9 12c0 2.11-.821 4.094-2.314 5.586A7.84 7.84 0 0 1 13 19.837v2.213c5.102-.503 9.1-4.819 9.1-10.05S18.102 2.453 13 1.95M4.19 18.395l1.561-1.561A7.8 7.8 0 0 1 4.163 13H1.95a10.05 10.05 0 0 0 2.24 5.396" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SlowMotionRegular';
