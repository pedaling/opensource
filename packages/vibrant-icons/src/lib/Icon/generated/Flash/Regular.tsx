import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.695 11.37h3.88l-3 4.85v-3.34a.25.25 0 0 0-.25-.25h-3.88l3-4.85v3.34a.25.25 0 0 0 .25.25Zm1.5-10.385a.24.24 0 0 0-.205.115L4.06 14.745a.25.25 0 0 0 .205.385h6.295v7.635a.25.25 0 0 0 .255.25.24.24 0 0 0 .205-.115l8.93-13.645a.25.25 0 0 0-.205-.385H13.45V1.235a.25.25 0 0 0-.255-.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
