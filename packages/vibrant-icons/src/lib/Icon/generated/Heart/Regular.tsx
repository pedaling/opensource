import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'heart-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.338 13.228a6.95 6.95 0 0 1-1.937-4.99 6.95 6.95 0 0 1 2.144-4.903A6.94 6.94 0 0 1 7.376 1.4 7 7 0 0 1 12 3.134 7 7 0 0 1 16.624 1.4a6.94 6.94 0 0 1 4.83 1.935A6.95 6.95 0 0 1 23.6 8.24a6.95 6.95 0 0 1-1.937 4.989l-9.661 9.915zM7.376 3.6c-1.244 0-2.419.47-3.308 1.323a4.803 4.803 0 0 0-.142 6.782l8.075 8.286 8.085-8.298c1.824-1.902 1.756-4.94-.153-6.77A4.75 4.75 0 0 0 16.624 3.6a4.7 4.7 0 0 0-3.217 1.228l-1.406 1.268-1.406-1.268A4.8 4.8 0 0 0 7.378 3.6z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HeartRegular';
