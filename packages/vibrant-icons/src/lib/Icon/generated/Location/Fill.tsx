import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'location-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1c-4.95 0-9 4.1-9 9.15 0 4 2.7 6.5 5.3 9.15 1.15 1.2 2.35 2.4 3.5 3.55.05.05.15.1.2.1.1 0 .15-.05.2-.1 1.15-1.2 2.35-2.4 3.5-3.55 2.6-2.6 5.3-5.15 5.3-9.15C21 5.1 16.95 1 12 1Zm0 10.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'LocationFill';
