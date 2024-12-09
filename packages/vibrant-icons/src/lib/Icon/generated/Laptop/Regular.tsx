import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laptop-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.5 20.6c-1.2 0-2.1-.9-2.1-2.1v-.6h7.3v.1c.2.4.6.7 1.1.7h6.5c.5 0 .9-.3 1.1-.7v-.1h7.3v.6c0 1.2-.9 2.1-2.1 2.1zm-.1-3.5V5.5c0-1.2.9-2.1 2.1-2.1h15c1.2 0 2.1.9 2.1 2.1v11.6zm17-2.2V5.6H4.6v9.3z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'LaptopRegular';
