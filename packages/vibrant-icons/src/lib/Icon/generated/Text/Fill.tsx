import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'text-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.8 5.05H5.05v1.6a.2.2 0 0 1-.2.2h-2a.2.2 0 0 1-.2-.2v-3.8c0-.11.34-.2.2-.2h18.3c.11 0 .2.09.2.2v3.8a.2.2 0 0 1-.2.2h-2a.2.2 0 0 1-.2-.2v-1.6H13.2v13.9h1.45c.11 0 .2.09.2.2v2a.2.2 0 0 1-.2.2h-5.3a.2.2 0 0 1-.2-.2v-2a.2.2 0 0 1 .2-.2h1.45z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TextFill';
