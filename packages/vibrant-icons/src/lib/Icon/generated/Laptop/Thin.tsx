import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laptop-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.4,5.5c0-1-0.8-1.8-1.9-1.8h-15c-1,0-1.8,0.8-1.8,1.8v11.4h18.7V5.5z M19.6,15.1H4.3V5.3h15.3V15.1z M23.4,18.1v0.4 c0,1-0.8,1.9-1.9,1.9h-19c-1,0-1.9-0.8-1.9-1.9v-0.4h6.9c0.2,0.5,0.7,0.8,1.2,0.8h6.5c0.5,0,1-0.3,1.2-0.8H23.4z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'LaptopThin';
