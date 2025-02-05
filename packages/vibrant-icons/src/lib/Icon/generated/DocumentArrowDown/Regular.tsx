import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentarrowdown-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M16.7 14.95 12 19.1l-4.7-4.15 1.2-1.2 2.65 2.61v-5.61h1.7v5.61l2.65-2.61z" />
      <Svg.Path
        fillRule="evenodd"
        d="M3.65 23.1a.25.25 0 0 1-.25-.25V1.15A.25.25 0 0 1 3.65.9h10.639l.03.029 6.252 6.254.029.03V22.85a.25.25 0 0 1-.25.25zM13.4 3.123l-.023-.023H5.6v17.8h12.8V8.123l-.024-.023H13.4z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DocumentArrowDownRegular';
