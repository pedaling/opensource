import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentadd-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M3.65.9a.25.25 0 0 0-.25.25v21.7c0 .138.112.25.25.25h10.1v-2.2H5.6V3.1h7.777l.023.023V8.1h4.976l.024.024V13h2.2V7.213l-.03-.03L14.319.93 14.288.9z" />
      <Svg.Path d="M18.275 20.475V23.6h2.2v-3.125H23.6v-2.2h-3.125V15.15h-2.2v3.125H15.15v2.2z" />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DocumentAddRegular';
