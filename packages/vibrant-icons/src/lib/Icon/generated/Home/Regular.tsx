import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'home-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.35 21.85a.2.2 0 0 1-.2-.2V9.5a.1.1 0 0 1 .034-.075l9.75-8.5a.1.1 0 0 1 .132 0l9.715 8.47a.2.2 0 0 1 .069.15V21.65a.2.2 0 0 1-.2.2zm17.3-2.2v-9.194L12 3.786l-7.65 6.67v9.194h6.55v-4.8c0-.11.09-.2.2-.2h1.8c.11 0 .2.09.2.2v4.8z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HomeRegular';
