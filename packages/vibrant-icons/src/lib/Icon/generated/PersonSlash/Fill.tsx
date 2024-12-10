import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'personslash-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.968 5.413a5.101 5.101 0 1 1 5.87 5.868l9.798 9.8a.2.2 0 0 1 0 .283l-1.272 1.272a.2.2 0 0 1-.283 0L1.364 2.92a.2.2 0 0 1 0-.283l1.272-1.272a.2.2 0 0 1 .283 0zM8.351 12.907c-3.305 1.439-5.622 4.773-5.7 8.642-.001.111.088.2.199.2h14.344z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PersonSlashFill';
