import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalright-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9 19.35c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h9c.607 0 1.1.493 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1zm-6-8.5c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h15c.607 0 1.1.493 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1zM22.6 1.4h-1.7v21.2h1.7z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlignHorizontalRightFill';
