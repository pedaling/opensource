import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documenttext-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M8.4 14.9v2.2h7.2v-2.2zm0-4v2.2h7.2v-2.2z" />
      <Svg.Path
        fillRule="evenodd"
        d="M3.65 23.1a.25.25 0 0 1-.25-.25V1.15A.25.25 0 0 1 3.65.9h10.639l.03.03 6.252 6.253.029.03V22.85a.25.25 0 0 1-.25.25zM13.4 3.123l-.023-.023H5.6v17.8h12.8V8.124l-.024-.024H13.4z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DocumentTextRegular';
