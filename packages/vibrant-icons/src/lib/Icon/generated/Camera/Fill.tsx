import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'camera-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5" />
    <Svg.Path d="M21.7 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3M12 16.75c-2.6 0-4.75-2.15-4.75-4.75S9.4 7.25 12 7.25 16.75 9.4 16.75 12 14.6 16.75 12 16.75m5-8.5c-.7 0-1.25-.55-1.25-1.25S16.3 5.75 17 5.75s1.25.55 1.25 1.25S17.7 8.25 17 8.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'CameraFill';
