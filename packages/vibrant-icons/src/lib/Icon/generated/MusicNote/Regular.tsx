import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'musicnote-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.5 21.85a4.104 4.104 0 0 1-4.1-4.1 4.1 4.1 0 0 1 6-3.633V3.614l7.584-1.213.116-.019v5.003l-5.5.88v9.484c0 2.261-1.84 4.1-4.1 4.1m0-6c-1.048 0-1.9.852-1.9 1.9 0 1.047.852 1.9 1.9 1.9 1.047 0 1.9-.853 1.9-1.9 0-1.048-.853-1.9-1.9-1.9" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'MusicNoteRegular';
