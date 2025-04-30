import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalcenter-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.15 22.6v-3.25h-3.9c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h3.9v-2.3H4c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h7.15V1.4h1.7v3.25H20a1.1 1.1 0 0 1 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1h-7.15v2.3h3.9a1.1 1.1 0 0 1 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1h-3.9v3.25zm4.5-5.45v-1.8h-7.3v1.8zm3.25-8.5v-1.8H5.1v1.8z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlignHorizontalCenterRegular';
