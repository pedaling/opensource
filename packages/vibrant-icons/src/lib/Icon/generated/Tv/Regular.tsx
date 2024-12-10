import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'tv-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.5 3.4h-17c-1.2 0-2.1.9-2.1 2.1v11c0 1.2.9 2.1 2.1 2.1h3.4v2h10.2v-2h3.4c1.2 0 2.1-.9 2.1-2.1v-11c0-1.2-.9-2.1-2.1-2.1m-.1 13H3.6V5.6h16.8z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'TvRegular';
