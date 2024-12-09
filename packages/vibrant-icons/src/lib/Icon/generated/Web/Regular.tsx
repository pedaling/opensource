import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'web-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5m-2.95 9.6C9.25 6.7 11 4 12 4s2.75 2.7 2.95 7.1zm7.9 0c-.1-2.45-.65-4.7-1.5-6.3 2.4 1.15 4.15 3.5 4.5 6.3zm-12.9 0c.3-2.8 2.05-5.15 4.5-6.3-.85 1.6-1.4 3.85-1.5 6.3zm11.4 8.1c.8-1.5 1.35-3.55 1.5-5.85h2.9c-.4 2.6-2.1 4.75-4.4 5.85M12 20c-.95 0-2.65-2.5-2.95-6.65h5.9c-.3 4.15-2 6.65-2.95 6.65m-3.45-.8c-2.3-1.1-3.95-3.25-4.4-5.85h2.9c.15 2.3.7 4.35 1.5 5.85" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'WebRegular';
