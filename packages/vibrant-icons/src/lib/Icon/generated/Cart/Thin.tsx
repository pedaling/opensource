import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'cart-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M4.25 20.75c0 .95.8 1.75 1.75 1.75s1.75-.8 1.75-1.75S6.95 19 6 19s-1.75.8-1.75 1.75M16 22.5c-.95 0-1.75-.8-1.75-1.75S15.05 19 16 19s1.75.8 1.75 1.75-.8 1.75-1.75 1.75m6.75-17.25H5.25v-3.5c0-.15-.1-.25-.25-.25H1.25c-.15 0-.25.1-.25.25V3c0 .15.1.25.25.25H3.5V17.5c0 .15.1.25.25.25h15.9c.1 0 .2-.1.25-.2l3.1-12c.05-.15-.1-.3-.25-.3M18.45 16H5.25V7H20.8z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CartThin';
