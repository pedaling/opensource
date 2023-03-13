import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.19 1a.24.24 0 0 0-.205.115L4.055 14.76a.25.25 0 0 0 .205.385h6.295v7.635a.25.25 0 0 0 .373.22.24.24 0 0 0 .087-.085l8.93-13.645a.25.25 0 0 0-.205-.385h-6.295V1.25A.25.25 0 0 0 13.19 1Z" />
  </Svg>
);

Fill.iconType = 'Fill';
