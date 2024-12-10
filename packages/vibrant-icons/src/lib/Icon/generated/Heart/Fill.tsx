import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'heart-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.338 13.228a6.95 6.95 0 0 1-1.937-4.99 6.95 6.95 0 0 1 2.144-4.903A6.94 6.94 0 0 1 7.376 1.4 7 7 0 0 1 12 3.134 7 7 0 0 1 16.624 1.4c1.814 0 3.53.687 4.83 1.935A6.95 6.95 0 0 1 23.6 8.24a6.95 6.95 0 0 1-1.937 4.989l-9.661 9.915z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HeartFill';
