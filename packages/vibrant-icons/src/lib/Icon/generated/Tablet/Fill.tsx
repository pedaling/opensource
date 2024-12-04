import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'tablet-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.5,3.9h-17C2.3,3.9,1.4,4.8,1.4,6v12c0,1.2,0.9,2.1,2.1,2.1h17c1.2,0,2.1-0.9,2.1-2.1V6C22.6,4.8,21.7,3.9,20.5,3.9z M15,17.6H9c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h6c0.6,0,1.1,0.5,1.1,1.1S15.6,17.6,15,17.6z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TabletFill';
