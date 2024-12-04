import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'mobile-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7,22.4c-1,0-1.8-0.8-1.8-1.9v-17c0-1,0.8-1.9,1.8-1.9h10c1,0,1.9,0.8,1.9,1.9v17c0,1-0.8,1.9-1.9,1.9H7z M6.8,20.6h10.3 V3.3H6.8V20.6z M13.5,6.3c0.5,0,0.9-0.4,0.9-0.8S14,4.7,13.5,4.7h-3C10,4.7,9.6,5,9.6,5.5s0.4,0.8,0.9,0.8H13.5z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'MobileThin';
