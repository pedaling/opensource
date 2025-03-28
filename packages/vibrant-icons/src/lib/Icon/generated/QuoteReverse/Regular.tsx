import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'quotereverse-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M16.95 5c-2.3 0-4.45 2.05-4.45 4.55 0 2.95 2.6 5.2 5.65 4.55-.35 1.45-2.55 2.95-4.2 3.7-.1.05-.15.2-.1.3l.75 1.8c.05.1.2.2.3.15 3.15-1.45 5.85-4.1 6.8-7.55C22.75 8.6 20.65 5 16.95 5m.15 6.75c-1.15 0-2.1-.95-2.1-2.15s.95-2.15 2.1-2.15 2.1.95 2.1 2.15-.95 2.15-2.1 2.15M6.45 5C4.15 5 2 7.05 2 9.55c0 2.95 2.6 5.2 5.65 4.55-.35 1.45-2.55 2.95-4.2 3.7-.1.05-.15.2-.1.3l.75 1.8c.05.1.2.15.35.1 3.15-1.45 5.85-4.1 6.8-7.55 1-3.85-1.1-7.45-4.8-7.45m.15 6.75c-1.15 0-2.1-.95-2.1-2.15s.95-2.15 2.1-2.15 2.1.95 2.1 2.15-.95 2.15-2.1 2.15" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'QuoteReverseRegular';
