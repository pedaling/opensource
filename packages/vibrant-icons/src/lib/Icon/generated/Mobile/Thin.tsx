import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'mobile-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7 22.4c-1 0-1.8-.8-1.8-1.9v-17c0-1 .8-1.9 1.8-1.9h10c1 0 1.9.8 1.9 1.9v17c0 1-.8 1.9-1.9 1.9zm-.2-1.8h10.3V3.3H6.8zm6.7-14.3c.5 0 .9-.4.9-.8s-.4-.8-.9-.8h-3c-.5 0-.9.3-.9.8s.4.8.9.8z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'MobileThin';
