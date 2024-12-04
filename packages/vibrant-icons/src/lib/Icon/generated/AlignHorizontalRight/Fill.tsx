import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalright-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9.00039 19.3499c-.6065 0-1.1-.4935-1.1-1.1v-4c0-.6065.4935-1.1 1.1-1.1h9.00001c.6065 0 1.1.4935 1.1 1.1v4c0 .6065-.4935 1.1-1.1 1.1H9.00039ZM3.00039 10.8499c-.6065 0-1.1-.4935-1.1-1.1v-4c0-.6065.4935-1.1 1.1-1.1H18.0004c.6065 0 1.1.4935 1.1 1.1v4c0 .6065-.4935 1.1-1.1 1.1H3.00039ZM22.6004 1.3999h-1.7v21.2h1.7v-21.2Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlignHorizontalRightFill';
