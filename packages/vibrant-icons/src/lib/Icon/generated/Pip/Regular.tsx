import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pip-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M4.5 19.5v-15h15v6.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h8.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25z" />
    <Svg.Path d="M19.5 16v3.5H16V16zm2.25-2.5h-8c-.15 0-.25.1-.25.25v8c0 .15.1.25.25.25h8c.15 0 .25-.1.25-.25v-8c0-.15-.1-.25-.25-.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PipRegular';
