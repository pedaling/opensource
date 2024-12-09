import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'tv-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.1 20.4v-2H3.5c-1 0-1.9-.8-1.9-1.9v-11c0-1 .8-1.8 1.9-1.8h17c1 0 1.9.8 1.9 1.8v11c0 1-.8 1.9-1.9 1.9h-3.7v2zm-3.8-3.8h17.3V5.3H3.3z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TvThin';
