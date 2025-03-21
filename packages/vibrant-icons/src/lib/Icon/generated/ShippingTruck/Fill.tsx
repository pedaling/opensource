import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'shippingtruck-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 2h-5c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25h5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25M9.25 18c.7 0 1.25.55 1.25 1.25s-.55 1.25-1.25 1.25S8 19.95 8 19.25 8.55 18 9.25 18m0-2.5c-2.05 0-3.75 1.7-3.75 3.75S7.2 23 9.25 23 13 21.3 13 19.25s-1.7-3.75-3.75-3.75" />
    <Svg.Path d="M15 11.5H9.6l1.1-3H15V6H9.15c-.1 0-.2.05-.25.15l-2 5.35-4.75 1.45c-.1.05-.15.15-.15.25v7.55c0 .15.1.25.25.25h1.7c.15 0 .3-.15.25-.3-.25-.85-.3-1.8 0-2.8.55-2 2.25-3.5 4.3-3.8 2.65-.35 5 1.25 5.75 3.6.05.2.25.35.45.35h.3z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ShippingTruckFill';
