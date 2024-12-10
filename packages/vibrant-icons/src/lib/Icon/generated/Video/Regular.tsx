import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'video-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.35 21.85a.2.2 0 0 1-.2-.2V2.35c0-.11.09-.2.2-.2h19.3c.11 0 .2.09.2.2v19.3a.2.2 0 0 1-.2.2zm17.3-2.2V4.35H4.35v15.3zM9.4 8a.1.1 0 0 1 .152-.085l6.5 4a.1.1 0 0 1 0 .17l-6.5 4A.1.1 0 0 1 9.4 16z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'VideoRegular';
