import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'camera-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.5 4.5v15h-15v-15zM21.7 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3" />
    <Svg.Path d="M12 9.75c1.25 0 2.25 1 2.25 2.25s-1 2.25-2.25 2.25-2.25-1-2.25-2.25 1-2.25 2.25-2.25m0-2.5C9.4 7.25 7.25 9.4 7.25 12S9.4 16.75 12 16.75s4.75-2.15 4.75-4.75S14.6 7.25 12 7.25m5 1a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CameraRegular';
