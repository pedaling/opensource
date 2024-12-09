import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'add-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.25 10.75h-8v-8c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v8h-8c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h8v8c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-8h8c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AddRegular';
