import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'heart-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.33848 13.2284C1.04998 11.8849 0.362475 10.1124 0.401475 8.2389C0.440475 6.3649 1.20197 4.6239 2.54548 3.3354C3.84648 2.0874 5.56197 1.3999 7.37647 1.3999C9.08747 1.3999 10.726 2.0149 12 3.1344C13.274 2.0149 14.9125 1.3999 16.6235 1.3999C18.438 1.3999 20.154 2.0874 21.4545 3.3354C22.798 4.6239 23.559 6.3649 23.5985 8.2389C23.638 10.1129 22.95 11.8849 21.662 13.2279L12.0005 23.1434L2.33848 13.2284V13.2284Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HeartFill';
