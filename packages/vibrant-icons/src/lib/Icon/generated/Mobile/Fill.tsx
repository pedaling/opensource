import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'mobile-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7,22.6c-1.2,0-2.1-0.9-2.1-2.1v-17c0-1.2,0.9-2.1,2.1-2.1h10c1.2,0,2.1,0.9,2.1,2.1v17c0,1.2-0.9,2.1-2.1,2.1H7z M13.5,6.1 c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-3C9.9,3.9,9.4,4.4,9.4,5s0.5,1.1,1.1,1.1H13.5z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'MobileFill';
