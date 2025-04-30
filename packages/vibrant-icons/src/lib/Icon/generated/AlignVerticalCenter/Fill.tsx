import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticalcenter-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.75 21.1c-.606 0-1.1-.494-1.1-1.1v-7.15H.95v-1.7h3.7V4c0-.607.494-1.1 1.1-1.1h4a1.1 1.1 0 0 1 1.1 1.1v7.15h2.3v-3.9c0-.607.494-1.1 1.1-1.1h4a1.1 1.1 0 0 1 1.1 1.1v3.9h3.8v1.7h-3.8v3.9c0 .606-.493 1.1-1.1 1.1h-4c-.606 0-1.1-.494-1.1-1.1v-3.9h-2.3V20c0 .606-.493 1.1-1.1 1.1z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlignVerticalCenterFill';
