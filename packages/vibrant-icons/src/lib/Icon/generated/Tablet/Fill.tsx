import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'tablet-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.5 3.9h-17c-1.2 0-2.1.9-2.1 2.1v12c0 1.2.9 2.1 2.1 2.1h17c1.2 0 2.1-.9 2.1-2.1V6c0-1.2-.9-2.1-2.1-2.1M15 17.6H9c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h6c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TabletFill';
