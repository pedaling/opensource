import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridsqaure2x2-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.25 15.75v3.75H4.5v-3.75zm2.2-2.5h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25v-8.2c0-.15-.15-.3-.3-.3m9.05 2.5v3.75h-3.75v-3.75zm2.2-2.5h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25v-8.2c0-.15-.15-.3-.3-.3M8.25 4.5v3.75H4.5V4.5zm2.2-2.5h-8.2C2.1 2 2 2.1 2 2.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3m9.05 2.5v3.75h-3.75V4.5zM21.7 2h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'GridSqaure2x2Regular';
