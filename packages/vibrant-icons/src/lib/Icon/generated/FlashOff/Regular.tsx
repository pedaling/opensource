import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'flashoff-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m20.015 19.75 1.66-1.66a.25.25 0 0 0 0-.355l-1.41-1.41a.25.25 0 0 0-.355 0l-1.66 1.66-1.665-1.66a.24.24 0 0 0-.35 0l-1.415 1.41a.255.255 0 0 0 0 .355l1.665 1.66-1.665 1.66a.255.255 0 0 0 0 .355l1.415 1.41a.24.24 0 0 0 .35 0l1.665-1.66 1.66 1.66a.25.25 0 0 0 .355 0l1.41-1.41a.25.25 0 0 0 0-.355zm-9.82-8.38h3.88l-3 4.85v-3.34a.25.25 0 0 0-.25-.25h-3.88l3-4.85v3.34a.25.25 0 0 0 .25.25m1.5-10.385a.24.24 0 0 0-.205.115L2.555 14.745a.25.25 0 0 0 .21.385H9.06v7.635a.25.25 0 0 0 .46.135l8.93-13.645a.25.25 0 0 0-.21-.385h-6.29V1.235a.25.25 0 0 0-.255-.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'FlashOffRegular';
