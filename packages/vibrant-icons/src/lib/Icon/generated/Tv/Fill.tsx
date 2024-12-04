import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'tv-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.5,3.4h-17c-1.2,0-2.1,0.9-2.1,2.1v11c0,1.2,0.9,2.1,2.1,2.1h3.4v2h10.2v-2h3.4c1.2,0,2.1-0.9,2.1-2.1v-11 C22.6,4.3,21.7,3.4,20.5,3.4z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TvFill';
