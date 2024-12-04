import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkshield-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m400.7 98.12-159.94-60-.7-.26-.7.26-160.06 60-1.3.49v181.43c0 .46 1.47 46.27 40.67 81.45 38.72 34.74 119.61 79.81 120.42 80.26l.97.54.97-.54c.78-.44 79.08-44.19 120.28-80.24 40.22-35.19 40.68-81.05 40.68-81.51V98.62l-1.3-.49Zm-58.05 95.68-96.52 96.52-22.27 22.28-1.49 1.48-1.49-1.48-83.53-83.53-1.48-1.49 1.48-1.49 29.7-29.7 1.49-1.48 1.49 1.48 53.09 53.09 87.6-87.61 1.49-1.48 1.49 1.48 28.95 28.95 1.48 1.49-1.48 1.49Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'CheckShieldFill';
