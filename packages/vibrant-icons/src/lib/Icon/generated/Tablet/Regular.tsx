import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'tablet-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.9 16c0-.6.5-1.1 1.1-1.1h6c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1H9c-.6 0-1.1-.5-1.1-1.1M22.6 6v12c0 1.2-.9 2.1-2.1 2.1h-17c-1.2 0-2.1-.9-2.1-2.1V6c0-1.2.9-2.1 2.1-2.1h17c1.2 0 2.1.9 2.1 2.1m-2.2.1H3.6v11.8h16.8z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'TabletRegular';
