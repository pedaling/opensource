import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'personslash-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M6.968 5.413a5.101 5.101 0 1 1 5.87 5.868l9.798 9.8a.2.2 0 0 1 0 .283l-1.272 1.272a.2.2 0 0 1-.283 0L1.364 2.92a.2.2 0 0 1 0-.283l1.272-1.272a.2.2 0 0 1 .283 0zM12 3.35a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8"
      clipRule="evenodd"
    />
    <Svg.Path d="M8.351 12.907C4.99 14.371 2.65 17.795 2.65 21.75h2.2c0-3.416 2.224-6.257 5.218-7.126z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PersonSlashRegular';
