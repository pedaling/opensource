import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalleft-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M1.4 22.6V1.4h1.7v21.2zM6 19.35c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h9a1.1 1.1 0 0 1 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1zm7.9-2.2v-1.8H7.1v1.8zM6 10.85c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h15a1.1 1.1 0 0 1 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1zm13.9-2.2v-1.8H7.1v1.8z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlignHorizontalLeftRegular';
