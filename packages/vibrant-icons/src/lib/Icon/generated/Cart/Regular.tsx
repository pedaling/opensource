import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'cart-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M4 20.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2m12 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6.75-17.25H6v-3.5c0-.15-.1-.25-.25-.25h-4.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H3.5v13.5c0 .15.1.25.25.25h15.9c.1 0 .2-.1.25-.2l3.1-12c.05-.15-.1-.3-.25-.3m-4.85 10H6v-7.5h13.85z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CartRegular';
