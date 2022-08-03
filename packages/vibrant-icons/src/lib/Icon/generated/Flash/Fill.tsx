import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M13.19 1a.24.24 0 0 0-.205.115L4.055 14.76a.25.25 0 0 0 .205.385h6.295v7.635a.25.25 0 0 0 .373.22.24.24 0 0 0 .087-.085l8.93-13.645a.25.25 0 0 0-.205-.385h-6.295V1.25A.25.25 0 0 0 13.19 1Z" />
  </Svg>
);
