import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M11.945 10.62h5l-4.66 7.115V13.63a.25.25 0 0 0-.25-.25h-5l4.66-7.115v4.105a.25.25 0 0 0 .25.25ZM13.19.985a.24.24 0 0 0-.205.115l-8.93 13.645a.25.25 0 0 0 .205.385h6.295v7.635a.251.251 0 0 0 .373.22.239.239 0 0 0 .087-.085l8.93-13.645a.25.25 0 0 0-.205-.385h-6.295V1.235a.25.25 0 0 0-.255-.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
