import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'musicnote-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.5 21.85a4.104 4.104 0 0 1-4.1-4.1 4.1 4.1 0 0 1 6-3.633V3.614l7.584-1.213.116-.019v5.003l-5.5.88v9.484c0 2.261-1.84 4.1-4.1 4.1" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'MusicNoteFill';
