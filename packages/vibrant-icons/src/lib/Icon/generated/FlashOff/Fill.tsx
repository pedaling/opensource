import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'flashoff-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.69 1a.24.24 0 0 0-.205.115L2.555 14.76a.25.25 0 0 0 .205.385h6.295v7.635a.25.25 0 0 0 .255.25.24.24 0 0 0 .205-.115l8.93-13.645a.25.25 0 0 0-.205-.385h-6.295V1.25A.25.25 0 0 0 11.69 1m8.115 18.75 1.89-1.89a.22.22 0 0 0 0-.31l-1.235-1.235a.22.22 0 0 0-.31 0l-1.89 1.89-1.895-1.89a.22.22 0 0 0-.31 0l-1.23 1.235a.21.21 0 0 0 0 .31l1.89 1.89-1.89 1.89a.21.21 0 0 0 0 .31l1.23 1.235a.22.22 0 0 0 .31 0l1.895-1.89 1.89 1.89a.22.22 0 0 0 .31 0l1.235-1.235a.22.22 0 0 0 0-.31z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'FlashOffFill';
