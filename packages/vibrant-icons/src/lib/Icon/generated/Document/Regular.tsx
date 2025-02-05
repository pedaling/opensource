import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'document-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M3.65.9a.25.25 0 0 0-.25.25v21.7c0 .138.112.25.25.25h16.7a.25.25 0 0 0 .25-.25V7.213l-.03-.03L14.319.93 14.288.9zm9.727 2.2.023.023V8.1h4.976l.024.024V20.9H5.6V3.1z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DocumentRegular';
