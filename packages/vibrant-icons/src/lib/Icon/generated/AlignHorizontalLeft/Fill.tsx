import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalleft-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M1.40039 22.5999v-21.2h1.7v21.2h-1.7Zm4.6-3.25c-.6065 0-1.1-.4935-1.1-1.1v-4c0-.6065.4935-1.1 1.1-1.1h9.00001c.6065 0 1.1.4935 1.1 1.1v4c0 .6065-.4935 1.1-1.1 1.1H6.00039Zm0-8.5c-.6065 0-1.1-.4935-1.1-1.1v-4c0-.6065.4935-1.1 1.1-1.1H21.0004c.6065 0 1.1.4935 1.1 1.1v4c0 .6065-.4935 1.1-1.1 1.1H6.00039Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlignHorizontalLeftFill';
