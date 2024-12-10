import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laptop-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.4 5.5c0-1-.8-1.8-1.9-1.8h-15c-1 0-1.8.8-1.8 1.8v11.4h18.7zm-1.8 9.6H4.3V5.3h15.3zm3.8 3v.4c0 1-.8 1.9-1.9 1.9h-19c-1 0-1.9-.8-1.9-1.9v-.4h6.9c.2.5.7.8 1.2.8h6.5c.5 0 1-.3 1.2-.8z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'LaptopThin';
