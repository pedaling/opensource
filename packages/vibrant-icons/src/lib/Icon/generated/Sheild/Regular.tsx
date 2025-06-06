import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sheild-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m12 3.7 7.5 3.2c0 3.15-.3 6.75-1 8.3-.95 2.2-4.3 4.15-6.5 5.1-2.2-1-5.55-2.9-6.55-5.1-.65-1.55-.95-5.15-.95-8.3zM12 1h-.1L2.15 5.15C2.1 5.2 2 5.3 2 5.4c0 1.1-.15 7.8 1.2 10.8 1.75 3.95 7.95 6.45 8.75 6.8h.2c.8-.3 7-2.8 8.7-6.8 1.35-3 1.2-9.7 1.15-10.8 0-.1-.05-.2-.15-.2L12.1 1z" />
    <Svg.Path d="M15.25 8c-.05 0-.15 0-.2.05l-4 4-2.1-2.1c-.05-.05-.1-.05-.2-.05s-.15 0-.2.05l-1.4 1.4c-.1.1-.1.25 0 .35l3.7 3.7c.05.1.15.1.2.1s.15 0 .2-.05l5.6-5.6c.1-.1.1-.25 0-.35l-1.4-1.4c-.1-.1-.15-.1-.2-.1" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SheildRegular';
