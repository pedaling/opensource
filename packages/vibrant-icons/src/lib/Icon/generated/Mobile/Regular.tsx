import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'mobile-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7 22.6c-1.2 0-2.1-.9-2.1-2.1v-17c0-1.2.9-2.1 2.1-2.1h10c1.2 0 2.1.9 2.1 2.1v17c0 1.2-.9 2.1-2.1 2.1zm9.9-2.2V3.6H7.1v16.8zM13.5 6.6c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'MobileRegular';
