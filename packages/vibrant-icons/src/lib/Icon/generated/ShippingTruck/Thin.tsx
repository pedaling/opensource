import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'shippingtruck-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 3.75c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25h-7.1c-.15 0-.25.1-.25.25V6H9.15c-.1 0-.2.05-.25.15l-2 5.35-4.75 1.45c-.1.05-.15.15-.15.25v7.55c0 .15.1.25.25.25h3.7c.65 1.2 1.9 2 3.3 2 1.45 0 2.7-.8 3.3-2h9.2c.15 0 .25-.1.25-.25V19.5c0-.15-.1-.25-.25-.25h-5.6V3.75h5.6Zm-12.5 17.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm5.15-2H13c0-2.05-1.7-3.75-3.75-3.75S5.5 17.2 5.5 19.25H3.75v-4.9l3.6-1.1h7v6h.05Zm0-7.75H8.85l1.4-3.75h4.15v3.75Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ShippingTruckThin';
