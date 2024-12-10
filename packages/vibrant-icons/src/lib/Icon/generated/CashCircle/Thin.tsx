import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'cashcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 22.85a10.78 10.78 0 0 1-7.673-3.178A10.78 10.78 0 0 1 1.15 12c0-2.899 1.129-5.623 3.177-7.673A10.78 10.78 0 0 1 12 1.15c2.898 0 5.623 1.129 7.672 3.177A10.78 10.78 0 0 1 22.85 12c0 2.898-1.13 5.623-3.178 7.672A10.78 10.78 0 0 1 12 22.85m0-20c-5.046 0-9.15 4.104-9.15 9.15 0 5.045 4.104 9.15 9.15 9.15 5.045 0 9.15-4.105 9.15-9.15 0-5.046-4.105-9.15-9.15-9.15m.127 13.722c-2.697 0-4.306-1.719-4.306-4.598v-.006c0-2.87 1.61-4.585 4.306-4.585 2.228 0 3.85 1.372 3.977 3.35H14.15c-.177-1.063-.95-1.72-2.022-1.72-1.377 0-2.233 1.13-2.233 2.949v.006c0 1.835.858 2.975 2.24 2.975 1.064 0 1.835-.658 2.023-1.72h1.954a3.4 3.4 0 0 1-1.152 2.365c-.722.635-1.728.984-2.832.984Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CashCircleThin';
