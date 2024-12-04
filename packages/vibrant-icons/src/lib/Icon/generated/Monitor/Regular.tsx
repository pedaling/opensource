import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'monitor-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.1,21.1v-2.2h1.8v-1.3H4c-1.2,0-2.1-0.9-2.1-2.1V5c0-1.2,0.9-2.1,2.1-2.1h16c1.2,0,2.1,0.9,2.1,2.1v10.5 c0,1.2-0.9,2.1-2.1,2.1h-5.9v1.3h1.7v2.2H8.1z M19.9,15.4V5.1H4.1v10.3H19.9z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'MonitorRegular';
