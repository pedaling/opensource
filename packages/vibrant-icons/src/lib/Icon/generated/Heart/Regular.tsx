import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'heart-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.33848 13.2284C1.04998 11.8849 0.362475 10.1124 0.401475 8.2389C0.440475 6.3649 1.20197 4.6239 2.54548 3.3354C3.84648 2.0874 5.56197 1.3999 7.37647 1.3999C9.08747 1.3999 10.726 2.0149 12 3.1344C13.274 2.0149 14.9125 1.3999 16.6235 1.3999C18.438 1.3999 20.154 2.0874 21.4545 3.3354C22.798 4.6239 23.559 6.3649 23.5985 8.2389C23.638 10.1129 22.95 11.8849 21.662 13.2279L12.0005 23.1434L2.33848 13.2284V13.2284ZM7.37647 3.5999C6.13247 3.5999 4.95747 4.0699 4.06797 4.9229C2.15897 6.7539 2.09597 9.7964 3.92647 11.7054L12.0005 19.9909L20.086 11.6934C21.91 9.7909 21.8415 6.7539 19.9325 4.9229C19.0435 4.0699 17.8685 3.5999 16.624 3.5999C15.3795 3.5999 14.285 4.0364 13.407 4.8279L12.001 6.0959L10.595 4.8279C9.71647 4.0364 8.57397 3.5999 7.37797 3.5999H7.37647V3.5999Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HeartRegular';
