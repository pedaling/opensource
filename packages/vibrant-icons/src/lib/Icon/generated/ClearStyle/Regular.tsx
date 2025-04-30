import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clearstyle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="m1.222 2.778 20 20 1.556-1.556-9.578-9.578V5.05h5.75v1.6a.2.2 0 0 0 .2.2h2a.2.2 0 0 0 .2-.2v-3.8a.2.2 0 0 0-.2-.2H4.205L2.778 1.222zM6.606 5.05l4.193 4.194V5.05z"
      clipRule="evenodd"
    />
    <Svg.Path d="M10.8 18.95v-3.595l2.4 2.4v1.195h1.45c.11 0 .2.09.2.2v2a.2.2 0 0 1-.2.2h-5.3a.2.2 0 0 1-.2-.2v-2a.2.2 0 0 1 .2-.2z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ClearStyleRegular';
