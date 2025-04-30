import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalright-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9 19.35c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h9a1.1 1.1 0 0 1 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1zm7.9-2.2v-1.8h-6.8v1.8zM3 10.85c-.606 0-1.1-.494-1.1-1.1v-4c0-.607.494-1.1 1.1-1.1h15a1.1 1.1 0 0 1 1.1 1.1v4c0 .606-.493 1.1-1.1 1.1zm13.9-2.2v-1.8H4.1v1.8zm5.7-7.25h-1.7v21.2h1.7z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlignHorizontalRightRegular';
