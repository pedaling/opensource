import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'location-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 11.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
    <Svg.Path d="M12 2.75c4 0 7.25 3.35 7.25 7.4 0 3.1-2.05 5.15-4.4 7.55l-.35.35-2.45 2.5-2.45-2.5-.35-.35c-2.35-2.4-4.4-4.5-4.4-7.55C4.75 6.1 8 2.75 12 2.75ZM12 1c-4.95 0-9 4.1-9 9.15 0 4 2.7 6.5 5.3 9.15 1.15 1.2 2.35 2.4 3.5 3.55.05.05.15.1.2.1.1 0 .15-.05.2-.1 1.15-1.2 2.35-2.4 3.5-3.55 2.6-2.6 5.3-5.15 5.3-9.15C21 5.1 16.95 1 12 1Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'LocationThin';
