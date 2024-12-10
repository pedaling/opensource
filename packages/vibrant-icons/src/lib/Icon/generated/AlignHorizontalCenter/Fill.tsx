import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalcenter-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.15 22.6v-3.25h-3.9c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h3.9v-2.3H4c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h7.15V1.4h1.7v3.25H20c.607 0 1.1.493 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1h-7.15v2.3h3.9c.607 0 1.1.493 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1h-3.9v3.25z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlignHorizontalCenterFill';
