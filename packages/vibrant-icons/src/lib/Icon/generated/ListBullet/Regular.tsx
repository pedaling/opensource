import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'listbullet-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M4 6.75c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M8.75 6h13c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25M4 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4.75-.75h13c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25m-4.75 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4.75-.75h13c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ListBulletRegular';
